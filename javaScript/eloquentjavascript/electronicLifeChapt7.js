/* Electronic Life Chap 7 
 1. 2 Dimensional game - two-dimensional grid. Each entity takes up one full square of the grid. 
2. Every turn each 'critter' get a chance to take some action.
3. Define time and space into units with a fixed size: squares and turns

Step 1: Define a world with a "plan", an array of strings - on character per square. 
*/

// the plan 

var plan = ['##########',
						'#   # # o#',
						'#         ',
						'#    ##  #',
						'##  o #  #',
						'#         ',
						'#o   #   #',
						'#    o  o#',
						'##########'];

// note: use an array to give it a relative structure.
// Squares are represented by their x and y coordinates using a simple Vector type. See chapt 6 for mor info.

// Vector Constructor
function Vector (x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function( other ) {
	return new Vector(this.x + other.x, this.y + other.y);
};

// the grid object (part of the world that handles the grid)

function Grid(width, height) {

	this.space = new Array(width * height);
	this.width = width;
	this.height = height;

}

Grid.prototype.isInside = function() {

	return vector.x >= 0 && vector.x <= this.width && 
	vector.y >= 0 && vector.y <= this.height; 

};

Grid.prototype.get = function(vector) {

	return this.space[vector.x + this.width * vector.y];

};

Grid.prototype.set = function(vector, value) {

	this.space[vector.x + this.width * vector.y] = value;

};

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));
// undefined
grid.set(new Vector(1, 1), 'X');
console.log(grid.get(new Vector(1, 1)));
// "X"

// A Critter's Programming Interface

var directions = {
	"n": new Vector(0, -1),
	"ne": new Vector(1,-1),
	"e": new Vector(1, 0),
	"se": new Vector(1, 1),
	"s": new Vector(0, 1),
	"sw": new Vector(-1, 1),
	"w": new Vctor(-1, 0),
	"nw": new Vector(-1, -1)
};

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];	
}

var directionNames = "n ne e se s sw w nw".split(" ");
function BouncingCritter() {
	this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function(view) {

	if(view.look(this.direction) != " ")
	this.direction = view.find(" ") || "s";
return {type: "move", direction: this.direction};

};

// The World Object

function elementFromChar(legend, ch) {
	if(ch == " ")
		return null;
		var element = new legend[ch]();
		element.originChar = ch;
return element;
}


function World(map, legend) {

var grid = new Grid(map[0].length, map.length);
this.grid = grid;
this.legend = legend;

map.forEach(function(line, y) {
	for(var x = 0; x < line.length; x++)
		grid.set(new Vector(x, y),
		elementFromChar(legend, line[x]));

});

}

function charFromELement(element) {
	if(element = null )
	return = " ";
 else 
	return element.originChar;
}

World.prototype.toString = function() {
	var output = "";
for(var y = 0; y < this.grid.height; y++) {
	for(var x = 0; x < this.grid.width; x++) {
		var element = this.grid.get(new Vector(x, y));
		output += charFromElement(element);
   }
		output += "\n";
}
return output;
};

function Wall() {}

var world = new World(plan, {"#": Wall, 
															"o": BouncingCritter})
