const Map = require('../../Model/Map');

exports.index = (req,res)=>{
    res.render('admin/map/index');
};
exports.store = (req,res)=>{
  const mapLocation = req.body;
  const map = new map({
     mapLocation:mapLocation,
  });
  map.save().then(result=>{
      Console.log('Map Direction');
  }).catch(err=>{
      Console.log('Location required');
  });
  res.redirect('/admin/map');
};