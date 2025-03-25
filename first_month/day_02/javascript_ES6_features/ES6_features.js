// JavaScript ES6 (ECMAScript 2015) introduced several important features that are widely used in modern JavaScript development. Here are the most important ES6 features


// 1. let & const (Block-Scoped Variables)

// let: Allows reassignment but is block-scoped.
// const: Cannot be reassigned and is also block-scoped.


let age = 25;
age = 26; // ✅ Allowed

const name = "John";
// name = "Doe"; ❌ Error (Cannot reassign)



// 2. Arrow Functions (=>)

// Concise syntax for writing functions.


const add = (a, b) => a + b;
console.log(add(1, 3))



// 3. Template Literals (Backticks )
// Used for string interpolation.


const name_01 = "Alice";
console.log(`Hello, ${name_01}!`); // "Hello, Alice!"



// 4. Default Parameters
// Set default values for function parameters.


const greet = (name = "Qamar") => "Hello, " + name;
console.log(greet())
console.log(greet("Rafay"))



// 5. Destructuring (Array & Object)
// Extract values easily from objects or arrays.


const user = { firstName: "Alice", age: 25 };
const { firstName, age_01 } = user;
console.log(firstName, age_01); // "Alice", 25

const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a, b, c); // 10, 20, 30





// 6. Spread (...) & Rest (...) Operator
// Used to expand or collect elements.


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread
console.log(arr2); // [1, 2, 3, 4, 5]


const sum = (...nums) => nums.reduce((a, b) => a + b, 0)
console.log(sum(1, 2, 3, 4, 5, 6, 7))



// 7. Object Property Shorthand
// Shortens object creation when variable names match keys.


const name_02 = "Qamar";
const age_02 = 19;

const user_01 = {name_02, age_02};
console.log(user_01)


// 8. Promises & Async/Await
// Handle asynchronous operations.


const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 2000));

fetchData().then((data) => console.log(data)); // After 2 sec: "Data loaded"

// Using async/await
const fetchDataAsync = async () => {
  const data = await fetchData();
  console.log(data);
};
fetchDataAsync();



// 09. Classes (OOP in JS)
// Create reusable object-oriented code.


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const user1 = new Person("Alice", 25);
  user1.greet(); // "Hello, my name is Alice"

  




