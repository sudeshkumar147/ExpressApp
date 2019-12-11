const Post = require('../Model/Post');

exports.index = (req,res) => {
    res.render('post/index');

};

exports.show = (req,res) => {
    res.render('post.show');
}