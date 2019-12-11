const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: String,
    slug: String,
    image: String,
    title: String,
    body: String,
    tags: String,
    meta_title: String,
    meta_desc: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Post',PostSchema);