const Post = require('../../Model/Post');

exports.index = (req,res)=>{

    Post.find().limit(10).then(result => {

        res.render('admin/post/index',{
            posts:result,
        });

    });

};

exports.create = (req, res) => {
    res.render('admin/post/create');

};

exports.edit = (req, res) => {


};

exports.store = (req,res)=>{

    const {title,slug,tag,body} = req.body;

    let file = req.files;
    let file_name = '';
    if (file) {
        file_name = file.image.md5+'.'+file.image.mimetype.split('/')[1];
        file.image.mv('public/storage/'+file_name, function(err) {
            if (err) {
                console.log(err);
                 // file_name = 'fine_not_uploaded';
            }else{
                console.log('ok');
                // file_name = 'file_uploaded_path';
            }
        });
    }

    const post = new Post({
        title:title,
        slug:slug,
        image:file_name,
        tag:tag,
        body:body,
    });

    post.save().then(result=>{
       console.log('Post Added');
    }).catch(err =>{
        console.log('something went wrong,try again');
    });

    res.redirect('/admin/post');

};



exports.show = (req,res)=>{
    const post = Post.findById(req.body.id);
    res.render('admin/post/show',{
        post:post,
    });

};
exports.destroy = async (req,res)=>{
    const post = await Post.findByIdAndRemove(req.params.id);
    res.redirect('/admin/post');
};
