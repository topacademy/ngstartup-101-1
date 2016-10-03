var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/local';

router.get('/', function(req, res) {
    MongoClient.connect(url,function(err,db){
         db.collection('restaurants').find({}).toArray(function(err,data){                  
            res.render('pages/restaurants', {"data": data});
            db.close();
           });
        });
    });

module.exports = router;