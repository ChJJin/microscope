Meteor.publish('newPosts', function(limit) {
	return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('topPosts', function(limit) {
	return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit});
});


Meteor.publish('singlePost', function(id) {
	return id && Posts.find(id);
});

Meteor.publish('comments', function(postId) {
	return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
	return Notifications.find({userId: this.userId});
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