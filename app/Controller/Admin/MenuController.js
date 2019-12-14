const Menu = require('../../Model/Menu');

exports.index = (req,res) => {
    Menu.find().then(result => {
        res.render('admin/menu/index',{
            menus: result,
        });
    });
};

exports.create = (req,res) => {
    res.render('admin/menu/create');
};

exports.store = (req,res) => {
  const { name, url, order } = req.body;

  const menu = new Menu({
      name:name,
      url: url,
      order:order,
      parent_id: null,
      route: null,
      parameter: null,
  });
   menu.save().then(result => {
       req.flash('deletePostErrorMsg', 'Something went wrong while deleting post!');
       return res.redirect('/admin/menu');
   })
};

exports.destroy = async (req,res) => {
  await Menu.findByIdAndRemove(req.params.id).then(res => {
      req.flash('successMessage', 'You are successfully using req-flash');
  }).catch(error => {
     req.flash('errorMessage', 'You are successfully using req-flash');
  });
  res.redirect('/admin/menu');

};