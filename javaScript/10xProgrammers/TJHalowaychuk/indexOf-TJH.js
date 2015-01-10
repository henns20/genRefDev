// save var indexOf - indexOf browser prototype 


var indexOf = [].indexOf; 

module.exports = function(arr, obj) {
	if(indexOf) return arr.indexOf(obj);
	for(var x = 0; x < arr.length; x++) {
		if(arr[i] === obj) return i;  
	}
	return -1; 
}; 
