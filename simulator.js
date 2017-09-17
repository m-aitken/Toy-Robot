console.log("welcome to Toy Robot Simulator");

// robot exists as coords + facing values e.g. (0,0,north) or (2,3,south)
// when robot 'reports', returns the current coords and facing

var cardinalDirection = ["north", "south", "east", "west"];
var robotFacing;
var robotPosition;
var tableSize = [5,5];

var report = function() {
	console.log('robot is at ' + robotPosition + ', facing ' + robotFacing + '.');
};

var place = function(x, y, f) {
	robotPosition = [x, y];
	robotFacing = f;
	console.log('robot placed on table');
	report();
};

var placedCheck = function() {
	if (robotPosition !== undefined) {
		return true;
		} else {
			return false;
		}
};

// var move = function() {
// 	if (placedCheck()) {

// 	}
// }