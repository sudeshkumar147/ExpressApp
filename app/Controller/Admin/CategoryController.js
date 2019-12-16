const Category = require('../../Model/Category');



exports.index = (req,res)=>{
    res.render('admin/category/index');


};
exports.store = (req,res)=>{
    const name = req.name;
        const category = new Category({
            name:name,
        });
        category.save().then(result=>{
            console.log("Category Added");
        }).catch(err=>{
            Console.log("Category Deleted");
        });
res.redirect('/admin/category');
};