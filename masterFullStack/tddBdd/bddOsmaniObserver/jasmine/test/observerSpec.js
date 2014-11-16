/**
 * Created by john on 11/15/14.
 */
describe("ObjectList Object", function() {


    it("the ObjectList object should be defined", function() {
       expect(ObserverList).toBeDefined();
    });
    it("the ObjectList should have an observers array property", function() {
        var myObserverList = new ObserverList();
        expect(myObserverList.observers).toBeDefined();
    });

    it("should be able to add an object to the list", function() {
        var obj1 = {};
        var myObserverList = new ObserverList();
        myObserverList.add(obj1);
        expect(myObserverList.observers[0]).toBe(obj1);
    });
    it("should only be able to be able to add an object", function() {
        var myObserverList = new ObserverList();

        myObserverList.add(12);
console.log(myObserverList.observers[0])
        expect(myObserverList.observers.length).toBe(0);
    })

});

describe("the Subject or the Observable Object ", function () {
    it("should be defined", function () {
       expect(Subject).toBeDefined();
    });

    it("should have a objectList property", function() {

    });
});