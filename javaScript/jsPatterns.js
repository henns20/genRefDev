// Model of the list of dependent Observers a subject might have

function ObserverList() {
	this.observerList = [];
}

ObserverList.prototype.add = function ( obj ) {
	// adding obj to the observerList property which is an array
	this.observerList.push( obj );  
};

ObserverList.prototype.count = function() {

	return this.observerList.length; 
};

ObserverList.prototype.get( index ) {
	if ( index > -1 && index < this.observerList.length ) {
	return this.observerList[ index ];
}

};

ObserverList.prototype.indexOf = function( obj, startIndex ) {
	var i = startIndex;
	
	while( i < this.observerList.length ) {
	if( this.observerList[i] === obj ) {
	return i;
	}
	i++; 
	}
	return -1;
}; 

ObserverList.prototype.removeAt = function( index ) {
	this.observerList.splice(index, 1 );
};


// model the Subject and the ability to add, remove or nitify observers on the observer list.

function Subject() {
	this.observers = new ObserverList();
	
}

Subject.prototype.addObserver = function (observer ) {
	this.observers.add( observer );
};

Subject.prototype.removeObserver = function ( observer ) {
	this.observers.removeAt(this.observers.indexOf( observer, 0 ) ); 
};

Subject.prototype.notify = function( context ) {
	var observerCount = this.observers.count();
	for(var i =0; i < observerCount; i++) {
	this.observers.get(i).update( context );
}
};

// skeleton of Observer

function Observer() {
	this.update = function() {

	};
}
// using th above Observer components we now define:
// 1.button for adding new observable checkboxes to the page;
// 2.control checkbox which will act as a subject, notifying other checkboxes they should be checked
// 3. a container for the new checkboxes being added 

//HTML:
<button id="addNewObserver">Add New Observer checkbox</button>
<input id="mainCheckbox" type="checkbox" />
<div id="observersContainer'></div>

// Sample Script:

// Extend an object with an extention
function extend ( extension, obj ) {
	for ( var key in extension ) {
	obj[key] = extension[key];
}
}

// References to our DOM elements

var controlCheckbox = document.getElementById( "mainCheckbox"  ), 
	addBtn = document.getElementById( "addNewObserver" ), 
	container = doucment.getElementById( "observersContainer"  );
	
// Concrete Subject
// Extend the controlling checkbox with the Subject class 
extend( new Subject(), controlCheckbox );

// clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
	controlCheckbox.notify( controlCheckbox.checked ); 

addBtn.onclick = addNewObserver

//Concrete Observer

function addNewObserver() {
	
}
}

