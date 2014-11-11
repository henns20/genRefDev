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

// Using the module

// basetModule returns an object with a pucblic API we can use 

// purpose: 1. add 2 items 2. get # of items in basket 3. get total cost of items 4. show 2 methods or statements that will not work. 


basketModule.addItem({
	item: 'cucumber',
	price: 0.5
});

basketModule.addItem({
	item: 'apple',
	price: 0.3
});

// get total cost and amount of items in the basket

console.log(basketModule.getTotal());
console.log(basketModule.getCount());

// do a couple of things that won't work

console.log(basketModule.basket);
console.log(basket);
