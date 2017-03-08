var express = require('express');
var bodyParser = require('body-parser');
var Article = require('../server/model').Article;

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    next();
});

app.route('/messages')
    .get(function (req, res) {
        Article.find().then(function (messages) {
            res.send(messages);
        }, function (err) {
            res.send([]);
        });
    })
    .post(function (req, res) {
        var message = req.body;
        console.log(message)
        Article.create(message)
            .then(function (message) {
                return Article.find();
            }).then(function (messages) {
                console.log(messages)
            res.send(messages);
        })
    })



app.listen(9090);