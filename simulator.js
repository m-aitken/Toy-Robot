console.log("welcome to Toy Robot Simulator");

// robot exists as coords + facing values e.g. (0,0,north) or (2,3,south)
// when robot 'reports', returns the current coords and facing

var cardinalDirection = ["north", "south", "east", "west"];
var robotDirection = "north";
var robotPosition;
var tableSize = [5,5];

var report = function() {
	console.log('robot is at ' + robotPosition + ', facing ' + robotDirection + '.');
};


var place = function(x,y,f) {
	robotPosition = (x,y);
	robotDirection = f;
	console.log('robot placed on table');
	report();
};