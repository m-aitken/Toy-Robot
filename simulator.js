console.log("welcome to Toy Robot Simulator");

/* robot exists as coords + facing values e.g. (0,0,north) or (2,3,south)
when robot 'reports', returns the current coords and facing */

var cardinalDirection = ["north", "south", "east", "west"];
var robotFacing;
var robotPosition;
// var tableSize = [5,5]; /* no longer required */

var report = function() {
	console.log('robot is at ' + robotPosition + ', facing ' + robotFacing + '.');
};

/* function to place robot on table, takes 3 parameters*/
var place = function(x, y, f) {
	robotPosition = [x, y];
	robotFacing = f;
	console.log('robot placed on table');
	report();
};

/* placement check if robotPosition is 'undefined' - set 'false' - otherwise must be 'true' */ 
var placedCheck = function() {				
	if (robotPosition !== undefined) {		
		return true;												
	} else {
			return false;
	}
};

/* function to define coordinate value less than zero */
var lessZero = function (position) {
	return position < 0;
};

/* function to define coordinate value exceeding five */
var exceedFive = function (position) {
	return position > 5;
};

/* move function increment/decrement coords value per each case of facing, checks command valid per defined limits */
var move = function() {
	if (placedCheck()) {
		var newPosition = robotPosition.slice();
		switch (robotFacing) {
			case "north":
				newPosition[1]++;
				break;
			case "south":
				newPosition[1]--;
				break;
			case "east":
				newPosition[0]++;
				break;
			case "west":
				newPosition[0]--;
				break;
		// if (robotFacing === "north") {
		// 	newPosition[1]++;
		// } else if (robotFacing === "south") {
		// 	newPosition[1]--;
		// } else if (robotFacing === "east") {
		// 	newPosition[0]++;
		// } else if (robotFacing === "west") {
		// 	newPosition[0]--;
		// }
		}
		/* check proposed new position parameter of function is true, no action */
		if (newPosition.some(lessZero) || newPosition.some(exceedFive)) { 
			console.log('cannot move off table');
		} else {
			/* else, move is valid, robot position is updated */
			robotPosition = newPosition;
			console.log('robot moved to ' + robotPosition);
			// console.log('robot not on table')
			}
	}
};

/* find current facing in facing array, add/subtract index to turn left/right */