const page = require('../../Model/page');
exports.index = (req,res)=>{
    res.redirect('admin/page/index');
};
exports.create = (req,res)=>{
    const{title,description,image} = req.body;
    const Schema = new Schema({
       title:title,
       description:description,
       image:image,
    });
    page.save().then(response =>{
        Console.log('page saved');
    }).catch(err=>{
        Console.log('page not saved');
    });
    res.redirect('/admin/page');
};
exports.update = (req,res)=>{
    const{title,description,image} = req.body;
    const Schema = new Schema({
        title:title,
        description:description,
        image:image,
    });
    page.findByIdAndUpdate(req.UpdateID).then( response =>{
        Console.log('page updated');
    }).catch(err=>{
        console.log('page update haulted');
    });
    res.redirect('/admin/page');

};
exports.delete = (req,res)=>{
  const{title,description,image} = req.body;
  const Schema = new Schema({
      title:title,
      description:description,
      image:image,
  });
  page.findByIdAndRemove(req.params.pageId).then(response =>{
      Console.log('page deleted');
    }).catch(err=>{
       Console.log('page deletion haulted');
    });
  res.redirect('/admin/page');
};