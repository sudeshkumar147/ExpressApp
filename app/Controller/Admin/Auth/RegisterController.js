const User = require('../../../Model/Users');

exports.index = (req, res) => {
    res.render('admin/auth/register');
};

exports.register = (req,res) => {
    const { name, email, mobile, password, confirmPassword } = req.body;

    if (password === confirmPassword) {
        const user = new User({
            name: name,
            email: email,
            mobile: mobile,
            password: password,
        });

        user.save().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }else {

    }

    res.redirect('/admin/dashboard');
}