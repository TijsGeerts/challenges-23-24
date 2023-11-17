// Write your code here
function myFirstFunction(bike) {
	forward(bike);
}
function twiceForward(bike) {
	forward(bike);
	forward(bike);
}
function thriceForward(bike) {
	forward(bike);
	forward(bike);
	forward(bike);
}
function forward4(bike) {
	forward(bike);
	forward(bike);
	forward(bike);
	forward(bike);
}
function forward5(bike) {
let i = 5;

while (i > 0) {
	forward(bike);
	i = i - 1;
}
}
function forward10(bike) {
let i = 10;

while (i > 0) {
	forward(bike);
	i = i - 1;
}
}
function right(bike) {
	turnRight(bike);
	forward(bike);
}
function ellShape(bike) {
	forward5(bike);
	turnRight(bike);
	forward4(bike);
}
function uTurn(bike) {
	thriceForward(bike);
	turnRight(bike);
	forward10(bike);
	turnRight(bike);
	twiceForward(bike);
}
function forwardN(bike, steps) {
	let i = steps;
	
	while (i > 0) {
	forward(bike);
	i = i - 1;
	}
}
function crookedUTurn(bike) {
	forwardN(bike, 7);
	turnRight(bike);
	forwardN(bike, 9);
	turnRight(bike);
	forwardN(bike, 3);
}
function forwardUntilWall(bike) {
while (!sensor(bike)) {
	forward(bike);
}
}
function smartEllShape(bike) {
	forwardUntilWall(bike);
	turnRight(bike);
	forwardUntilWall(bike);
}
function forwardUntillWall(car) {
while (!sensor(car)) {
	forward(car);
}
}
function spiral(car) {
while (!sensor(car)) {
	forwardUntillWall(car);
	turnRight(car);
}
}
function turnLeft(car) {
	turnRight(car);
	turnRight(car);
	turnRight(car);
}
function turnAround(car) {
	turnRight(car);
	turnRight(car);
}
function left(car) {
	turnLeft(car);
	forward(car);
}
function slalom(car) {
	forwardUntillWall(car);
	turnLeft(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnLeft(car);
	forwardUntillWall(car);
	turnLeft(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
}
function leftOrRight(car) {
	turnLeft(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnLeft(car);
	forwardUntillWall(car);
}
function incompleteU(car) {
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
	turnRight(car);
	forwardUntillWall(car);
}
function whichDirection(car) {
while (sensor(car)) {
	turnRight(car);
	}
	forwardUntillWall(car);	
}
function sensorRight(car) {
	turnRight(car);
	let result = sensor(car);
	turnLeft(car);

	return result;
}
function firstRight(car) {
while (sensorRight(car)) {
	forward(car);
	}
	turnRight(car);
	forwardUntillWall(car);
}
function sensorLeft(car) {
	turnLeft(car);
	let result = sensor(car);
	turnRight(car);

	return result;
}
function firstLeft(car) {
	while (sensorLeft(car)) {
	forward(car);
	}
	turnLeft(car);
	forwardUntillWall(car);
}
function zigZag(car) {
	firstRight(car);	
	turnLeft(car);
	forward(car);
	firstLeft(car);	
}
function forwardUntillFreeRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }
}
function secondRight(car) {
	forwardUntillFreeRight(car);
	forward(car);
	forwardUntillFreeRight(car);
	turnRight(car);
	forwardUntillWall(car);
}
function thirdRight(car) {
let i = 3

while (i > 0 ) {
	forwardUntillFreeRight(car);
	forward(car);
	i = i - 1
	}
	turnAround(car);
	forward(car);
	turnLeft(car);
	forwardUntillWall(car);
}
function fourthRight(car) {
let i = 4

while (i > 0 ) {
	forwardUntillFreeRight(car);
	forward(car);
	i = i - 1
	}
	turnAround(car);
	forward(car);
	turnLeft(car);
	forwardUntillWall(car);
}
function forwardUntillNthRight(car, nrights) {
	let i = nrights;
	
	while (i > 0) {
	forward(car);
	
	if (!sensorRight(car)) {
	i = i - 1;
	}
}
}
function fourthRight(car) {
	forwardUntillNthRight(car, 4)
	turnRight(car);
	forwardUntillWall(car);
}
function forwardUntillNthLeft(car, nlefts) {
	let i = nlefts;
	
	while (i > 0) {
	forward(car);
	
	if (!sensorLeft(car)) {
	i = i - 1;
	}
}
}
function fifthLeft(car) {
	forwardUntillNthLeft(car, 5);
	turnLeft(car);
	forwardUntillWall(car);
}
function maze(car) {
	function L(n) {
		forwardUntillNthLeft(car, n);
		turnLeft(car);
	}

	function R(n) {
		forwardUntillNthRight(car, n);
		turnRight(car);
	}	
	R(2);
	L(1);
	L(2);
	L(2);
	R(4);
	R(1);
	L(3);
	forwardUntillWall(car);
}
function backward(car) {
	turnAround(car);
	forward(car);
	turnAround(car);
}
function isDeadEnd(car) {
	if (!sensor(car)) {
	return false;
	}
	if (!sensorRight(car)) {
	return false;
	}
	if (!sensorLeft(car)) {
	return false;
	}
	return true;
}
function findDeadEnd(car) {
    while (true) {
        forward(car);

        if (isDeadEnd(car)) {
            return;
        }

        backward(car);
        turnRight(car);
    }
}
function follow(car) {
	 while (!isGoal()) {
        if (!sensor(car)) {
            forward(car);
        } else if (!sensorRight(car)) {
            turnRight(car);
            forward(car);
        } else {
            turnLeft(car);
            forward(car);
        }
    }

    function isGoal() {
        if (isDeadEnd(car)) {
            return true;
        }

        return false;
    }
}
function rightHand(car) {
while (!isDeadEnd(car)) {
	if (!sensorRight(car)) {
	turnRight(car);
	forward(car);
	}
	else if (!sensor(car)) {
		forward(car);
		}
	else {
	turnLeft(car);
	forward(car);
	}
}
}
function forwardUntilDestination(car) {
while (!destinationReached(car)) {
	if (!sensor(car)) {
	forward(car);
	}
	else if (!sensorRight(car)) {
	turnRight(car);
	}
	else {
	turnLeft(car);
	}
	}
}