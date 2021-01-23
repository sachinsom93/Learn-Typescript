"use strict";
let node1 = { value: 10, getValue() {
        console.log(this);
        return this.value;
    } };
console.log(node1.getValue());
