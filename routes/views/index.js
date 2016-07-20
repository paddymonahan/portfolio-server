var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	//add data to locals so we can dynamically add the projects to the homepage etc
	locals.data = {
		tickets: [],
	}
	view.on('init',function(next){
		var q = keystone.list('Project').model.find();
		q.exec(function(err,results){
			locals.data.projects = results;
			next(err);
		});
	});



	// Render the view
	view.render('index');
};
