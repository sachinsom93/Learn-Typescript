interface myNode{
    value: number;
    getValue(): number;
}

let node1: myNode = {value : 10, getValue(){
    console.log(this);
    return this.value;
}}

console.log(node1.getValue())