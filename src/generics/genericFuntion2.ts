interface lengthy{
    length: number;
}

function countAndPrint<X extends lengthy>(element: X): [X, string]{
    let description = 'Got no value.'
    if(element.length === 1){
        description = 'Got one element.'
    } else if(element.length > 1){
        description = 'Got '+ element.length + ' elements.';
    }
    return [element, description]
}

console.log(countAndPrint("hi my name is sachin som."))

// function extractAndConvert(obj: object, key: string){
//     return obj[key];
//     // getting an error as typescript dont know that obj contain that key or not.
// }

function extractAndConvert< X extends object, Y extends keyof X>(obj: X, key: Y){
    return 'value ' + obj[key];
}

console.log(extractAndConvert({name: 'sachin', age: 21}, "age"))