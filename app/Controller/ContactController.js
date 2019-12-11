const Contact = require('../Model/Contact');
exports.index = (req,res) => {
    res.render('contact');
};

exports.store = (req,res) => {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });

    contact.save().then((result) => {
        console.log('added new data');
    }).catch((error) => {
        console.log(error)
    });

    res.redirect('/contact')
};