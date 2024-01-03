class Vehicle {
	drive(): void {
		console.log('chagaa chagga');
	}
	honk(): void {
		console.log('beep');
	}
}

// It will take all the properties of vehicles,
// if we define same property in it, it will overwritten parent
class Bike extends Vehicle {
	drive(): void {
		console.log('vroom');
	}
}

const bike = new Bike();
bike.drive(); // vroom

// Modifiers: Public, Private, Protected methods in class

// everything is public by default
class Human {
	// can be called anywhere, anytime
	public live() {
		console.log('Lives life Happily');
	}

	// can be called only inside same class
	private sad() {
		console.log('They are sad');
	}

	// can be called by other method
	// or in child class too
	protected shelter() {
		console.log('They have their home');
	}
}

// Fields

class Animal {
	name: string;
	danger: boolean;

	constructor(name: string, danger: boolean) {
		this.name = name;
		this.danger = danger;
	}
}

const lion = new Animal('lion', true);
console.log(lion);

// we can make it shorter like this
class Bird {
	constructor(public name: string, public danger: boolean) {}
}

const sparrow = new Bird('Sparrow', false);
console.log(sparrow);

// child class fields
class PetBird extends Bird {}

// We have to pass constructor fields of parent in child
const parrot = new PetBird('parrot', false);

// To add new constructor in child class, we have to provide parent fields in super()
class PetAnimal extends Animal {
	constructor(public maxAge: number, name: string, danger: boolean) {
		super(name, danger);
	}
}

const dog = new PetAnimal(16, 'Dog', true);
console.log(dog);