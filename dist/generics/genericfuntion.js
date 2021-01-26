"use strict";
function mergeObject(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const merged = mergeObject({ name: "sachin" }, { age: 30 });
console.log(merged);
console.log(merged.name);
