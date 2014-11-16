/**
 * Created by john on 11/15/14.
 */

// create the objectList Object Constructor



function ObserverList() {
    this.observers = [];
}

ObserverList.prototype.add = function(obj) {
    if((parseFloat(obj) == parseInt(obj)) && !isNaN(obj)) {
        return false;
    } else
        this.observers.push(obj);

};


function Subject() {
    this.observerList = new ObserverList();
}

var subject = new Subject();




