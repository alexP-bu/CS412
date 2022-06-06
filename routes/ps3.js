var express = require('express');
var router = express.Router();

// POST with body {string: x, len: y}
router.post('/', (req, res) => {
    res.render('ps3', {str: req.body.string, len: req.body.length});
});

/* GET users listing. */
router.get('/', (req, res) => {
    if(req.query.name){
        res.render('ps3', {str: req.query.name})
    }else{
        res.render('ps3', {str: 'Hey now'});
    }
});

module.exports = router;
