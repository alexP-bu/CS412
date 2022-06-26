var express = require('express');
var router = express.Router();
const axios = require('axios');
const API = require('../config/dogAPI');

/* GET users listing. */
router.get('/dogs/', async (req, res) => {
    const query = req.query.search;
    const dogsPromise = (await axios.get(API.url, { params: { q: query, x_api_key: API.key }})).data
        //if a dog has an image, map it
        .map(async (dog) => {
            let id = dog.reference_image_id;
            if (id != null){
                dog.imageURL = (await axios.get('https://api.thedogapi.com/v1/images/' + id, { params: { x_api_key: API.key }})).data.url;
            }
            return dog;
        });
    Promise.all(dogsPromise).then(dogs => res.send(dogs));
});

module.exports = router;
