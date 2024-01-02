//---------------------- Type Annotations

let fName: string = 'John';
let age: number = 28;
let isWorking: boolean = true;

let nothing: null = null;
let nothingToo: undefined = undefined;

// we can re-assingn values
fName = 'Henry';
age = 17;
isWorking = false;

// Built in Objects
let today: Date = new Date();

// array
const animals: string[] = ['Lion', 'Beer', 'Elephant'];
const dice: number[] = [1, 2, 3, 4, 5, 6];
const teamAwon: boolean[] = [false, true, true, false, false, true];

// class
class Car {}

const myCar: Car = new Car();

// object
const person: { name: string; age: number } = {
	name: 'David',
	age: 34,
};

// function
const addNumber: (a: number, b: number) => number = (a, b) => {
	return a + b;
};
const result: number = addNumber(2, 3);
console.log(result);

// ------------ Type inference

// If declaration and initialization are on the same line, typescript will figure out the types automatically

const lName = 'Smith';
// It will automatically define type string to above varaible.

// When to Use inference?: Always


// When to Use annotation?

// 1. Function that return 'any' type
const jsonData = '{"email": "support@mail.com", "username": "david_willian"}';
const userInfo: { email: string; username: string } = JSON.parse(jsonData);
console.log(userInfo);

// 2. When a variable is declared but not initialized

let fruits = ['apple', 'mango', 'banana'];
let foundFruit: boolean;

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] === 'mango') {
		foundFruit = true;
	}
}

// 3. Variables whose type cannot be inferred correctly

let numbers = [-31, 32, 19, -42];

let naturalNumbers: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		naturalNumbers = numbers[i];
	}
}
