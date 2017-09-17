console.log("welcome to Toy Robot Simulator");

/* robot exists as coords + facing values e.g. (0,0,north) or (2,3,south)
when robot 'reports', returns the current coords and facing */

var cardinalDirection = ["north", "south", "east", "west"];
var robotFacing;
var robotPosition;
var tableSize = [5,5];

/* set table boundary, below 0/0 and beyond 5/5 */

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
		/*work out conditionals - pos numbers not to exceed 0-5*/
		robotPosition = newPosition;
		console.log('robot moved to ' + robotPosition);
	} else {
		console.log('robot not on table')
	}
};

/* find current facing in facing array, add/subtract index to turn left/right*/