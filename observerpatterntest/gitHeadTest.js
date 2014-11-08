/**
 * Created by john on 11/7/14.
 */
function extend(extension, obj) {
    for(var prop in extension) {
        obj[prop] = extension[prop];

    }
}
