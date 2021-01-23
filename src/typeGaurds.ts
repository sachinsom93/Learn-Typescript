/*
    type gaurds helps us in union types

*/
type Combine = number | string;
type Numeric = number | boolean;

function combine(value: Combine): Combine{
    return value;
}

console.log(combine(4545))