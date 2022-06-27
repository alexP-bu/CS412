var express = require('express');
var router = express.Router();
const axios = require('axios');
const API = require('../config/dogAPI');
const redis = require('redis');

const redisClient = redis.createClient();

/* GET users listing. */
router.get('/dogs/', async (req, res) => {
    const query = req.query.search;

    if(redisClient.exists(query)){
        //get objects
    }else{

    }

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
    Promise.all(dogsPromise).then(dogs => res.send(dogs));
});

module.exports = router;
