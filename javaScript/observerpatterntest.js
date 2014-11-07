/**
 * Created by john on 11/7/14.
 */
// goal: create an example of observe pattern
// Observe Pattern contains: 1) a Subject element(obj) with a list of observers 2) Observers have and update property - that gets notified by the subject element.


function ObserverList() {

    this.observerList = [];

}

// Prototype methods to the ObserverList as an interface
// 2 that I understand 1)add 2)count
// 3 don't completely get - but I think bc make sense logically when viewing the Subject methods

ObserverList.prototype.add = function(obj) {
    this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

// so get uses the known index or better said uses an index to get an obj in the list
ObserverList.prototype.get = function(index) {
    // before it gets it error checks the index parameter
    if(index > -1 && index < this.observerList.length ) {
        return this.observerList[index];
    }

};

// indexOf not sure why need this

ObserverList.prototype.indexOf = function(obj, startIndex) {

    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }
    return -1;

};

ObserverList.prototype.removeAt = function(index) {

    this.observerList.splice(index, 1);
};




// Create a SubJect Class (constructor)


function Subject() {

    this.observers = new ObserverList();

}

Subject.prototype.addObserver = function(observer) {

    this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {

    this.observers.removeAt(this.observers.indexof(observer, 0));
};

Subject.prototype.notify = function(context) {
    var observersCount = this.observers.count();
    for(var i = 0; i < observersCount; i++) {
        this.observers.get(i).update(context);
    }

}



// the Observer Class Object Constructor

function Observer() {
    this.update = function() {};
}


// the script

// create and extend class function

function extend(extension, obj) {
    for(var key in extension ) {

        obj[key] = extension[key];
    }

}


// retrieve the elements and save them in variable

var controlCheckbox = document.getElementById("mainCheckbox"),
    addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer");


// create a ConcreteSubject
// extend the controlling checkbox with the Subject class

extend(new Subject(), controlCheckbox);

// Clicking the check will trigger notifications to the observers
// in this case it is passing the value of the property checked to observers

controlCheckbox.onclick = function () {
    controlCheckbox.notify(controlCheckbox.checked);

}

// now for the Observers
// need to create them



function addNewObserver() {

    // CREATE new checkbox to be added
    var oCheckbox = document.createElement("input");
    oCheckbox.type = "checkbox";

    // extend the checkbox with the Observer Class

    extend(new Observer(), oCheckbox);

    // Override with custom update behavior

    oCheckbox.update = function(value) {
        this.checked = value;
    };
// add new observer to our list of observers
//    for our main subject
    controlCheckbox.addObserver(oCheckbox);

    // Append it to the html container

    container.appendChild(oCheckbox);

}

addBtn.onclick = addNewObserver;
