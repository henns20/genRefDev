/**
 * Created by john on 12/21/14.
 */

//see it in action http://plnkr.co/edit/UZ9Krix7kuxNswGlU6kr?p=preview
// what I learned
//1. more about bind and apply and call - but it is a difficult mehtod to explain in a phrase
//2. slice.call(arguments)  makes arguments into an array
//3. var firstValue = array.shift()
//4. the apply uses the array as the second parameter
//5. concat combines to arrays into one.


Function.prototype.bind = function () {
    var fn = this, args = Array.prototype.slice.call(arguments), obj = args.shift()
//    1. saving the main function as fn to use later in the apply
//    2. making an array our of the arguments and storing them is args
//    3. lopping off the 1st arg and saving it as the obj that you will use for the context in apply.
//
    return function() {
//        1. returning a function that when called will return the function being used as the binding. apply it to the new obj as the this or context and add any addition arguments

        return fn.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
    }
};
//
//1. used in call backs when the this scope will change

function LateBloomer() {
    this.petals = 5;
}

LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.someFunction.bind(this), 1000);
};

LateBloomer.prototype.thisSomeFunction = function() {
    console.log("The amount of petals is " + this.petals);
};

var lateBloomer1 = new LateBloomer()