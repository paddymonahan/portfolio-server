var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Project = new keystone.List('Project', {
	autokey: { from: 'name', path: 'key', unique: true },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Project.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Project.schema.virtual('url').get(function() {
 		return '/projects/'+this.slug;
 	 
 });

Project.register();
