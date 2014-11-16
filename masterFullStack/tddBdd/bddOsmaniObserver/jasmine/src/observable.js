var tddjs = {};

(function () {

function Subject() {

}
   tddjs.Subject = Subject;

 Subject.prototype.addObserver = function(observer) {

     if (!this.observers) {
         this.observers = [];
     }
     if (typeof observer != "function") {
         throw new TypeError("observer is not function");
     }

     this.observers.push(observer);
 };

 function hasObserver(observer) {
     if (!this.observers) {
         return false;
     }

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

        if (!this.observers) {
            return;
        }
        var length = this.observers.length;
        for (var i = 0; i < length; i++) {
            try {
                this.observers[i].apply(this, arguments);
            } catch(e) {}
        }

    }
    Subject.prototype.notify = notify;

}());