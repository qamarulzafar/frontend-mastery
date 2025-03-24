// JavaScript Variables

// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const


// In this first example, x, y, and z are undeclared variables.
// They are automatically declared when first used:

x = 5;
y = 6;
z = x + y;

console.log(x);
console.log(y);
console.log(z);

// Note
// It is considered good programming practice to always declare variables before use.

// Variables in JavaScript can be declared using var, let, or const. JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

// JavaScript var keyword
// JavaScript let keyword
// JavaScript const keyword 

var a = 10;     // Old style
let q = 20;    // Preferred for non-const
const c = 30;  // Preferred for const (cannot be changed)

console.log(a);
console.log(q);
console.log(c);

// Declaring Variables in JavaScript

// 1. JavaScript var keyword

// var is a keyword in JavaScript used to declare variables and it is Function-scoped and hoisted, allowing redeclaration but can lead to unexpected bugs.

var d = "Hello Geeks";
var e = 10;
console.log(d);
console.log(e);

// 2. JavaScript let keyword

// let is a keyword in JavaScript used to declare variables and it is Block-scoped and not hoisted to the top, suitable for mutable variables

let f = 12;
let g = "gfg";
console.log(f);
console.log(g);

// 3. JavaScript const keyword

// const is a keyword in JavaScript used to declare variables and it is Block-scoped, immutable bindings that can’t be reassigned, though objects can still be mutated.

const h = 5;
let i = "gfg";
console.log(h);
console.log(i);

// Rules for Naming Variables
// When naming variables in JavaScript, follow these rules

// Variable names must begin with a letter, underscore (_), or dollar sign ($).
// Subsequent characters can be letters, numbers, underscores, or dollar signs.
// Variable names are case-sensitive (e.g., age and Age are different variables).
// Reserved keywords (like function, class, return, etc.) cannot be used as variable names.

let userName = "Suman";  // Valid
let $price = 100;         // Valid
let _temp = 0;            // Valid
// let 123name = "Ajay";    // Invalid
// let function = "gfg"; // Invalid

// Variable Scope in JavaScript

// Scope determines the accessibility of variables in your code. JavaScript supports the following types of scope

// 1. Global Scope

var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am global too";

// 2. Function Scope

function test() {
    var localVar = "I am local";
    let localLet = "I am also local";
    const localConst = "I am local too";
}

// console.log(localVar); // Error: not defined

// 3. Block Scope

{
    let blockVar = "I am block-scoped";
    const blockConst = "I am block-scoped too";
}
// console.log(blockVar); // Error: not defined

// Interesting Facts about Variables in JavaScript

if (true) {
    var j = 10; 
}

// Accessible outside the block
console.log(j);

if (true) {
    let k = 20;
    const l = 30;
    console.log(k, l); // Accessible here
}
// console.log(k, l); // ReferenceError

// var can be redeclared in the same scope, but let and const cannot be

var m = 10;
var m = 20; // Allowed

let n = 30;
// let n = 40; // SyntaxError

const o = 50;
// const o = 60; // SyntaxError

// We can change elements of array or objects even if declared as const.

const obj = { a: 10 };
obj.a = 20; // Allowed

const arr = [10, 20, 30];
arr[2] = 40;
console.log(arr);  // Allowed

// When to Use var, let, or const

// We declare variables using const if the value should not be changed
// We should use let if we want mutable value or we can not use const
// We use var only if we support old browser.
