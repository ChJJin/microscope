Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
	ownPost: function() {
		return this.userId == Meteor.userId();
	},
	upvotedClass: function() {
		var userId = Meteor.userId();
		if (userId && !_.include(this.upvoters, userId)) {
			return 'btn-primary upvoteable';
		} else {
			return 'disabled';
		}
	}

});
	
/*Template.postItem.rendered = function() {
	// animate post from previous position to new position
	var instance = this;
	var rank = instance.data._rank;
	var $this = $(this.firstNode);
	var postHeight = 80;
	var newPosition = rank * postHeight;

	// if element has a currentPosition (i.e. it's not the first ever render)
	if (typeof(instance.currentPosition) !== 'undefined') {
		var previousPosition = instance.currentPosition;
		// calculate difference between old position and new position and send element there
		var delta = previousPosition - newPosition;
		$this.css("top", delta + "px");
	} else {
		$this.addClass("invisible");
	}

	// let it draw in the old position, then..
	Meteor.defer(function() {
		instance.currentPosition = newPosition;
		// bring element back to its new original position
		$this.css("top", "0px");
	});
};*/


Template.postItem.events({
	'click .upvoteable': function(event) {
		event.preventDefault();
		Meteor.call('upvote', this._id);
	}
});

