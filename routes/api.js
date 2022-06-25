var express = require('express');
var router = express.Router();
const axios = require('axios');
const API = require('../config/dogAPI');

/* GET users listing. */
router.get('/dogs/', function(req, res) {
     //get dog search data
     searchDogs(req.query.search)
         .then( async response => {
            //for each dog, if it has a image reference id, map the url to the dog
            let dogs = await response.data
                .map( async (dog) => {
                    (dog.reference_image_id != undefined) ? dog.imageURL = await getImageURL(dog.reference_image_id) : dog.imageURL = null;
                return dog
            });

        Promise.all(dogs).then(result => res.send(result));
     });
});

const getImageURL = async (id) => {
    let response = await axios.get('https://api.thedogapi.com/v1/images/' + id, { params: { x_api_key: API.key }})
        .catch(err => {
            console.log(err);
        });
    return response.data.url;
}

const searchDogs = async (query) => {
    return await axios.get(API.url, { params: { q: query, x_api_key: API.key }})
        .catch(error => {
            console.error(error);
        });
}

module.exports = router;
