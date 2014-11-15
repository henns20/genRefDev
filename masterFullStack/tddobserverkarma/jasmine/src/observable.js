var tddjs = {};

(function () {

function Subject() {
    this.observers = [];
}
   tddjs.Subject = Subject;

 Subject.prototype.addObserver = function(observer) {
     this.observers.push(observer);
 };

 function hasObserver(observer) {
     var length = this.observers.length;
     for(var i = 0; i < length; i++) {
         if(this.observers[i] === observer) {
             return true;
         }

     }
     return false;
 }
Subject.prototype.hasObserver = hasObserver;


    function notify() {
        var length = this.observers.length;
        for (var i = 0; i < length; i++) {
            this.observers[i].apply(this, arguments);

        }

    }
    Subject.prototype.notify = notify;

}());