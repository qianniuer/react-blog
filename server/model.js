var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://127.0.0.1/201613react');
var ArticleSchema = new mongoose.Schema({
    username:String,
    password:String,
    title:String,
    content:String,
    createAt:{type:Date,default:Date.now},
});
exports.Article = mongoose.model('Article',ArticleSchema);