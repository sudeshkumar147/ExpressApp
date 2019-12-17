const Post = require('../../Model/Post');

exports.index = (req,res)=>{
    res.render('admin/post/index');

};

exports.store = (req,res)=>{
    const {title,slug,image,tag,body} = req.body;

    let file = req.files.image;

    if (file) {
        file.mv('/somewhere/on/your/server/image.jpg', function(err) {
            if (err) {
                return res.status(500).send(err);
            }else{
                res.send('File uploaded!');
            }
        });
    }

    const post = new Post({
        title:title,
        slug:slug,
        image:image,
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
exports.delete = (req,res)=>{
    const post = Post.findByIdAndRemove(req.body.id);
    res.redirect('/admin/post');
};
