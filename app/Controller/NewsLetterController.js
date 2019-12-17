const NewsLetter = require('../Model/NewsLetter');

exports.store = (req,res) => {
    const { name, email } = req.body;

    const news = new NewsLetter({
        name: name,
        email: email,
    });

    news.save().then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })

    res.redirect('/');
};

exports.destroy = async (req,res) => {
	await NewsLetter.findByIdAndRemove(req.params.id).then(response => {
		console.log('NewsletterDeleted');
	}).catch(error => {
		console.log('something went wrong');
	});
};