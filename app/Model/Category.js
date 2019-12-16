const mongoose = require('mongoose');
const CategorySchema =  new mongoose.Schema({
    name: String,

},{
    timestamp:true,
});
module.exports =  mongoose.model('Category',CategorySchema);