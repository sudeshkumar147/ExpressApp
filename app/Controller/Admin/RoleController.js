const Role = require('../../Model/Role');
exports.index = (req,res)=>{

    Role.find().limit(10).then(result => {
        console.log(result);
        res.render('admin/role/index',{
            roles:result
        });
    }).catch(error => {
        console.log('something went wrong ');
    });
};
exports.create = (req,res)=>{
    res.render('admin/role/create');
};

exports.store = (req, res) => {
    const{user_id,role_id,menu_id,permission} = req.body;
    const role = new Role({
        user_id:user_id,
        role_id:role_id,
        menu_id:menu_id,
        permission:permission,
    });
    role.save().then( response =>{
        Console.log('Role created') ;
    }).catch( err=>{
        Console.log('page haulted');
    });
    res.redirect('/admin/role');
};
exports.update = (req,res)=>{
    const {user_id,role_id,menu_id,permission} = req.body;

    Role.findByIdAndUpdate(req.params.id).then( response =>{
    Console.log('Role updated');

    }).catch(err=>{
        Console.log('Role haulted');
    });
    res.redirect('admin/role');
};
exports.destroy = (req,res)=>{

    Role.findByIdAndRemove(req.params.id).then( response =>{
        Console.log('Role deleted');
    }).catch(err=>{
       Console.log('Role haulted');
    });
    res.redirect('/admin/role');
};

