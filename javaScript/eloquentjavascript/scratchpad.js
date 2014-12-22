// Start with abstracting and describing the World.prototype.toString is going to do
// end with wurn
// NO MORE THAT 20 MINUTES

// The world
// 1- takes a plan which is an array of strings
// 2- converts that into something that can be worked with in the program
// 3- world also to be able to convert is back
// 4- with in this world th

//

World.prototype.toString = function() {
    // what does this thing do - converts the grid info into to an array of strings the format the plan looked originally
    // what do you need
    // need to iterate over the grid
    var grid = ["xxxxxxxxxxxxxxxx"];
    for(var y = 0; y < this.grid.height; y++ ) {
        for(x = 0; x < this.grid.width; x++) {
            output += charFromElement(grid.getValue(new Vector(x, y)));
        }
        output += '\n';
    }
return output;
};



