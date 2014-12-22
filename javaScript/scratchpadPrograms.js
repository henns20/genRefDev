// practicing Electronic Life 


// vector constructor

function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(other) {
	return new Vector(other.x + this.x, other.y + this.y);
};

function Grid(width, height) {
	this.space = width * height;
	this.width = width;
	this.height = height;
	
}

Grid.prototype.isInside = function() {
	return vector.x >= 0 && vector.x <= this.width
	&& vector.y >=0 && vector.y <= height;
};

Grid.prototype.get = function(vector){
	return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector, value) {
	this.space[vector.x + vector.y * this.width] = value
}

// testing

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1,1)));
// undefined
grid.set(new Vector(1,1), 'X');
console.log(grid.get(new Vector(1,1)));
// X


// A Critter's Programming interface 
var directions = {
	"n": new Vector(0, -1),
	"ne": new Vector(1, -1),
	"e": new Vector(1, 0),
	"se": new Vector(1, 1),
	"s": new Vector(0, 1),
	"sw": new Vector(-1, 1),
	"w": new Vector(-1, 0),
	"nw": new Vector(-1, 1)
};

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var directionsNames = "n ne e se s sw w nw".split(" ");
function BouncingCritter() {
	this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction)) != " "
	this.direction = view.find(" ") || "s";
return {type: "move", direction: this.direction};
};

i// 

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
	this.direction = view.find(" ") || "s";
	return {type: "move", direction: this.direction}
};

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
	this.direction = view.find(" ") || "s";
	return {type: "move", direction: this.direction};
};

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
	this.direction = view.find(" ") || "s";
	return {type:"move", direction: this.direction }
};

















BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
	this.direction = view.find(" ") || "s";
	return {type:"move", direction: this.direction};
	
};



