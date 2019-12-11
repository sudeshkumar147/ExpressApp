const Contact = require('../../Model/Contact');
exports.index = (req,res)=>{
    res.render('admin/contact/index');
};
exports.show = (req,res)=>{
    const contact = Contact.findById(req.body.id);
    res.render('admin/contact/show');
};
exports.delete = (req,res)=>{
    const contact = Contact.findByIdAndRemove(req.body.id);
    res.redirect('/admin/contact');
};
