const Tag = require('../../Model/Tag');

exports.index = async (req,res) => {
    let tags = [];
    await Tag.find().limit(10).then(result => {
        tags = result;
        console.log(result);
    }).catch(error => {
        console.log('No tags found');
    });

    res.render('admin/tag/index',{
        tags: tags,
    });
};

exports.create = (req,res) => {
    res.render('admin/tag/create');
};

exports.edit = async (req,res) => {
    let tag = [];
    await Tag.findById(req.params.id).then(result => {
        tag = result;
    });

    res.render('admin/tag/edit',{
        tag: tag,
    });
};

exports.update = async (req,res) => {
  await Tag.findByIdAndUpdate(req.params.id,{$set:{tag:req.body.tag}},{new :true}).then(result => {
      console.log('data updated');
  }).catch(error => {
      console.log('something went wrong');
  });

  res.redirect('/admin/tag');
};

exports.store = (req,res) => {
    const { tag } = req.body;

    const newTag = new Tag({
        tag:tag,
    });

    newTag.save().then(result => {
        res.redirect('/admin/tag');
    }).catch(error =>
 {
        console.log('somethig went wrong pls try again');
    });

    res.redirect('/admin/tag');
};

exports.destroy = async (req,res) => {

    await Tag.findByIdAndRemove(req.params.id);

    res.redirect('/admin/tag');

};