const mongoose = require('mongoose');
const RoleSchema = new mongoose.Schema({
    user_id: String,
    role_id: String,
    menu_id: String,
    permission: String,
},{
    timestamps: true,

});
module.exports = mongoose.model('Role',RoleSchema);