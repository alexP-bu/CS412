var express = require('express');
var router = express.Router();
const axios = require('axios');
const API = require('../config/dogAPI');
const redis = require('redis');

const redisClient = redis.createClient();

/* GET users listing. */
router.get('/dogs/', async (req, res) => {
    const query = req.query.search;

    //if query was searched before, return dogs list associated with it
    if(await redisClient.hExists('dogs', query)){
        //get dogs and send result
        await redisClient.HGET('dogs', query, (err, dogs) => {
            res.send(JSON.parse(dogs))
        });
    }else{
        //object doesn't exist in redis, call the API and store the result associated with the search
        const dogsPromise =
            (await axios.get(API.url, { params: { q: query, x_api_key: API.key }}))
                //if a dog has a reference image, map it
                .data
                .map( async (dog) => {
                    let id = dog.reference_image_id;
                    if (id != null){
                        dog.imageURL = (await axios.get('https://api.thedogapi.com/v1/images/' + id, { params: { x_api_key: API.key }})).data.url;
                    }
                    return dog;
                });

        //resolve promises
        //store result in redis with key = query and the dog object as a json string
        Promise.all(dogsPromise).then(dogs => {
            redisClient.HSET('dogs', query, JSON.stringify(dogs));
            redisClient.HGET('dogs', query, (err, dogs) => {
                console.log(JSON.parse(dogs));
            });
            res.send(dogs);
        });
    }
});

module.exports = router;
