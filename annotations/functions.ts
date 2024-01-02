// Annotation for arrow function
const add = (a: number, b: number): number => {
	return a + b;
};

// No type inference for arugents, we have to provide annotation
// Type inference works out for output, but we should not use it as it will cause issues

// Annotation for anonymous function

function sub(a: number, b: number): number {
	return a - b;
}

const divideNumbers = function (a: number, b: number): number {
	return a / b;
};

// Void : Return Nothing
const logger = (msg: string): void => {
	console.log(msg);
};

// Never: Never reach the end of the function

const throwError = (msg: string): never => {
	throw new Error(msg);
};

// Destructuring with annotation
const todaysWeather = {
	date: new Date().toISOString(),
	weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
	console.log(date);
	console.log(weather);
};
