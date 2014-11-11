// the module 'design' pattern


//2nd example from Andy Osmani's Book

var Namespace = (function () {

	var myPrivateVar, myPrivateMethod;

// A private counter variable
myPrivateVar = 0;

// A private function which logs any arguments
myPrivateMehod = function (foo) {
	console.log(foo);
};

	return {
		// a public variable 
		myPublicVariable: 'foo',

		// a public method 
		myPublicFunction: function( bar  ) {
			myPrivateVar++;
			myPrivateMethod(bar);

}


	};


})();


// The basketModule or 3rd example for the section

var basketModule = (function(){
	
	var basket = [];
	function doSomethingPrivate () {};
	function doSomethingElsePrivate () {};

	// return object to the public

	return {
	// add an items to the basket

	addItem: function(values) {
	basket.push[values];	
},

	getCount: function() {
	return basket.length;
},

	doSomething: doSomethingPrivate,

	getTotal: function() {
	var p = 0;
	var q = this.getCount();
	
	while(q--) {
	p += basket[q];
	}	
	return p;
	
	}
	
	};

})();


