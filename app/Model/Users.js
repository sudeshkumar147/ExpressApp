const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    status: {type:Number,default:1},
},{
    timestamps: true
});

UsersSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('Users',UsersSchema);

