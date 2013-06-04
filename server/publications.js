Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('comments', function() {
	return Comments.find();
});


/*Publishing Partial Collections*/
Meteor.publish('somePosts', function(){
	return Posts.find({'author': 'Tom Coleman'});
});

/*Publishing Partial Properties*/
Meteor.publish('allPosts', function(){
	return Posts.find({}, {fields: {
		date: false
	}});
});