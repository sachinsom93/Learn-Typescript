"use strict";
function countAndPrint(element) {
    let description = 'Got no value.';
    if (element.length === 1) {
        description = 'Got one element.';
    }
    else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}
console.log(countAndPrint("hi my name is sachin som."));
function extractAndConvert(obj, key) {
    return 'value ' + obj[key];
}
console.log(extractAndConvert({ name: 'sachin', age: 21 }, "age"));
