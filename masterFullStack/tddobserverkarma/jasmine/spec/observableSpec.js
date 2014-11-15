/**
 * Created by john on 11/14/14.
 */

/* jasmine template used for learning purposes

    describe("A suite", function() {
        it("contains spec with an expectation", funciton() {
        expect(true).tobe(true);
        });
    });

*/

    describe("SubjectAddObservableTest", function() {
        it("test should store a function", function() {
            var subject = new tddjs.Subject();
            var observer1 = function () {};
            subject.addObserver(observer1);
        expect(observer1).toBe(subject.observers[0]);
        });
    });

describe("ObservableHasObserver", function () {

    var subject;
    var observer1;

    beforeEach(function() {
      subject = new tddjs.Subject();
       observer1 = function() {};

    });

    it("test should return true when have an observer", function() {

        subject.addObserver(observer1);
        expect(subject.hasObserver(observer1)).toBe(true);
    });
    it("test should return false when no observers", function () {

        expect(subject.hasObserver(observer1)).toBe(false);
    });

});

describe("SubjectNotifyTest", function() {


    it("test should call all observers", function() {
        var subject = new tddjs.Subject();

        var observer1 = function() {observer1.called = true;};
        var observer2 = function() {observer2.called = true;};

        subject.addObserver(observer1);
        subject.addObserver(observer2);
        subject.notify();

        expect(observer1.called).toBe(true);
        expect(observer2.called).toBe(true);
    });

    it("test should pass through arguments", function() {
        var subject = new tddjs.Subject();
        var actual;

        subject.addObserver(function() {
            actual = arguments;
        });

        subject.notify("String", 1, 32);
        var args = new Array;
        for(var i = 0; i < 3; i++) {
            args[i] = actual[i];
        }
        expect(args).toEqual(["String", 1, 32]);

    });
});

//Adding Bogus Observers

describe("Adding Bogus Observers", function() {

    it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var subject = new tddjs.Subject();
        var observer1 = function (){};

        function testaddObserver() {
            subject.addObserver(observer1);
        }

        expect(testaddObserver).not.toThrow();

    });
});


describe("Misbehaving Observers", function() {
    it("test should notify all even when some fail", function() {
        var subject = new tddjs.Subject();
        var observer1 = function() { throw new Error("Oops");};
        var observer2 = function() {observer2.called = true;}

        subject.addObserver(observer1);
        subject.addObserver(observer2);
        subject.notify();

        expect(observer2.called).toBe(true);


    });
});



describe('Documenting the call order', function() {
    it("observers should be called int he way they are added", function() {
        var subject = new tddjs.Subject();
        var calls = [];
        var observer1 = function() {
            calls.push(observer1);
        }
        var observer2 = function() { calls.push(observer2);};
        subject.addObserver(observer1);
        subject.addObserver(observer2);

        subject.notify();
        expect(observer1).toBe(calls[0]);
        expect(observer2).toBe(calls[1]);
    });
});


describe("Making the Constructor Obsolete", function () {
    it("should not fail with no observers", function () {
        var subject = new tddjs.Subject();

    function callNotify() {
        subject.notify();
    }
        expect(callNotify).not.toThrow();
    });
});