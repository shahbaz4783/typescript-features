const cocaCola = {
	color: 'brown',
	carbonated: true,
	sugar: 60,
};

// Make this object into array (tuple)

const pepsi: [string, boolean, number] = ['black', true, 50];

// We can also create alias for re-using the type

type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];


// Tuple Array
let employee: [number, string][];

employee = [
	[1, 'mike'],
	[2, 'clark'],
	[3, 'ben'],
	[4, 'adam'],
	[5, 'jason'],
];
