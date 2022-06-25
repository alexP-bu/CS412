var express = require('express');
var router = express.Router();
const axios = require('axios');
const API = require('../config/dogAPI');

/* GET users listing. */
router.get('/dogs/', function(req, res, next) {
    //get dog data
    let getDogs = searchDog(req.query.search).then(response => {
        return response.data;
    });
    //resolve dogs and then append images
    getDogs.then( dogsReturned => {
        dogsReturned.forEach( dog => console.log(dog.data));
    });
});

const getImage = async (id) => {
    const response = await axios.get('https://api.thedogapi.com/v1/images/' + id, { params: { x_api_key: API.key }})
        .catch(err => {
            console.log(err);
        });
    return response;
}

const searchDog = async (query) => {
    const response = await axios.get(API.url, { params: { q: query, x_api_key: API.key }})
        .catch(error => {
            console.error(error);
        });
    return response;
}

module.exports = router;
