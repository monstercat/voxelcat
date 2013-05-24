
var indexCtrl = function(app, clinet){
  app.get('/', function(req, res){
    res.render('index', { title: 'Voxelcat' });
  })
}

module.exports = function(app, client) {
  indexCtrl(app, client);
}
