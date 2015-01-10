/
*
 * Created by john on 12/22/14.
 */

/* what needs to be done on this?

/** Describing anonFn
 1. Goal returns signature of a anonymous function - enhance debugging
 2. returns a string
 3. Takes input...(fn)
    - makes it into a string and stripping its comments
        -- var fnTxt = fn.toString().replace(STRIP_COMMENTS, ''),
    - next searches for function (...);
        var args = fnTxt.match(FN_ARGS);
        -- this returns an array [function (x, y), x, y, ...]
        -- match also if not set to g (global) then it returns the source and index

    - checks to see if it has anything returned for args and constructs a function signature
        if(args) {
            return 'function(' + (args[1] || '').replace(/[\s\r\n]+/, ' ') + ')';
        }
        return 'fn';


 var STR_COMMENTS = /someRegex/;
 var FN_ARGS = /someRegex/m;

 function anonFn(fn) {

 // take the function make a string but strip the comments

 var fnTxt = fn.toString().replace(STR_COMMENTS);
 var args = fnTxt.match(STR_ARGS);

 if(args) {
    return 'function(' + (args[1] || "").replace(/[\s\r\n]+/, " ");

 }

 return 'fn';


 }
