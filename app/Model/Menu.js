const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: String,
    title: String,
    url: String,
    target: { type:String,default:'_self'},
    parent_id: Number,
    order:Number,
    route:String,
    parameter: String,
},{
    timestamps: true
});

module.exports = mongoose.model('Menu',MenuSchema);