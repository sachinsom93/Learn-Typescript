// function mergeObject(obj1: object, obj2: object){
//     return Object.assign(obj1, obj2);
// }

// const merged = mergeObject({name: "sachin"}, {age: 9})
// console.log(merged)
// merged.name 
// name is not accessible

function mergeObject<X, Y extends object>(obj1: X, obj2: Y){
    return Object.assign(obj1, obj2);
}

const merged = mergeObject({name: "sachin"}, {age: 30})
// without constraints number type silently fails 
console.log(merged)
console.log(merged.name)