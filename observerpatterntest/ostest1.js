// need a subject observer class - constructor function with a instance variable observers which is a object observerList - that has a n array of observers and a interface. The interface is not totally clear. A lot is but

// so knowing that there is an observers property with an observerList obj - lets make that first.


function ObserverList () {

    this.observerList = [];
}


// add another observer object to the list to the ObserverList
ObserverList.prototype.add = function(obj) {
  this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
    return this.observerList.length;
};


// is get a utility for other functions or for the subject interface?
ObserverList.prototype.get = function(index) {
      return this.observerList[index];
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;

    while(i < this.observerList.length) {
        if(this.observerList[i] === obj) {
            return i;
        }
        i++
        }
    return -1
};

ObserverList.prototype.removeAt = function(indexOf) {
    this.observerList.splice(indexOf, 1);
};


function Subject() {

        this.observers = new ObserverList();

}


Subject.prototype.addObserver = function(observer) {

    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {

    // iterate through the observerlist and tell them something
    var observerCount = this.observers.count();
    for(var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }

};


function Observer() {
    this.update = function() {};
}


// the actual script to manipulate the HTML page

// set some stuff up
// save the elements in variables
// 1st saving the controlCheckbox - i think it is making a concrete Subject is the term. But making it a subject


var controlCheck = document.getElementById("controlCheckbox");



// extend function - that extends the subject element into a full SUbject Class

function extend(extension, obj) {
    for(var key in extension) {
        obj[key] = extension[key];
    }
}

 extend( new Subject(), controlCheck);
controlCheck.onclick = function () {
    controlCheckbox.notify(controlCheck.checked);

}

// save the other elements
// 2nd  button want to to add an onClick property to is.
// 3rd saving the observers container - in order to use it to add check marks physically in it.

var addBtn = document.getElementById('addNewObserver');
var oContainer = document.getElementById("observersContainer");
addBtn.onclick = addNewObserver;

function addNewObserver() {
    var oCheck = document.createElement("input");
    oCheck.type = "checkbox";

    // create the Concrete Observer

    extend(new Observer(), oCheck);
    oCheck.update = function(value) {
        this.checked = value;
    }

    controlCheck.addObserver(oCheck);
    oContainer.appendChild(oCheck);


}

