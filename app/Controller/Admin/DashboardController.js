const Users = require('../../Model/Users');
const Contact = require('../../Model/Contact');
const Post = require('../../Model/Post');

exports.index = async (req,res) => {
    let contacts = [];
    let users = [];
    let posts = [];

    await Contact.find().limit(10).then(result => {
        contacts = result;
    });

    await Users.find().limit(10).then(result => {
        users = result;
    });

    await Post.find().limit(10).then(result => {
        posts = result;
    }).catch(error => {
        console.log('Post Data not found');
    });

    res.render('admin/dashboard',{
        users: users,
        contacts: contacts,
        posts: posts,
    });
}

exports.index = (req,res) => {
    Users.find().then(result => {
        if (result){
            res.render('admin/dashboard',{
                users: result,
            });
        }
    }).catch(error => {

    });

}