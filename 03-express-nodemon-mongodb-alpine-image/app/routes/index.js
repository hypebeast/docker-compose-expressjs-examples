const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
    mongoose.model('Todo').find({}, function (err, todos) {
        if (err) {
            return next(err);
        }

        res.render('index', { title: 'Express', todos: todos });
    });
});

module.exports = router;
