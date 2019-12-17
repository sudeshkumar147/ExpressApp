const mongoose = require('mongoose');
const pageSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
},{
    timestamps : true,


});
module.exports = mongoose.model('page',pageSchema);