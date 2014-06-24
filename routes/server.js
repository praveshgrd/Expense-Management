// config express & mongodb
var express = require("express");
var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var app=express();


var server = new Server('localhost', 27017, { auto_reconnect: true });
db = new Db('student', server);


//open connection of db

db.open(function(err,db){

    db.authenticate('pravin', 'pravin', function(err, success) {
    if(!err)
    {
        console.log(" connected to 'student' db");

        db.collection('students',{strict:true},function (err,collection)
        {
            if(err)
            {
                console.log("The 'studb' collection unavilable..!");
            }
        });


    }

    });
});

exports.adduser = function (req, res) {
    var studentRecord = req.body;
   var Success=false;
    console.log(studentRecord);
    db.collection('students', function (err, collection) {


        if(!err){
           // collection.findOne({firstName:studentRecord.firstName}, function(error,data){
            collection.find({firstName:studentRecord.firstName}).toArray(function(err, data) {
                      console.log("ppp");

                //var data=undefined;
                if(data && data.length){

                    console.log("check");
                    console.log(data);
                    res.send({Success:false});
                }
            else{
                    collection.insert(studentRecord, { safe: true }, function (err, result) {
                        if(err){
                            res.send({ 'error': 'An error has occurred' });
                        } else {

                            console.log("result");
                            console.log(result);
                            console.log('Success: ' + JSON.stringify(result[0]));
                            res.send({Success:true});

                        }
                    });

                }
            })

        }
    });
}
exports.viewuser = function(req, res) {
    db.collection('students', function(err, collection) {
        collection.find().toArray(function(err, items) {
            console.log("papa");
            console.log(items);
            //res.send(items);
            res.json(items);
        });
    });
}

exports.searchuser=function(req,res){
    var param=req.body;
    db.collection('students',function(err,collection){

        if(!param.firstName)
        {
            collection.find().toArray(function(err, items) {
                console.log("papa");
                console.log(items);
                //res.send(items);
                res.send(items);
            });
        }else{

            collection.find({firstName:param.firstName}).toArray(function(err, data) {
                console.log("search");
                console.log(data.length);
                if(data){
                    res.send(data)
                }



            })
        }

    })

}