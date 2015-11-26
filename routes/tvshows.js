var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TVShowCtrl = require('../controllers/tvshow');

router.route('/')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

router.route('/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});*/

module.exports = router;
