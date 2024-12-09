export { };

let a: number = 3;
let b: number = 6;

console.log(a, b);
[a, b] = [b, a];
console.log(a, b);