const onePlus = {
	model: 'onePlus 12',
	ram: 12,
	working: true,
};

const printPhone = (phone: {
	model: string;
	ram: number;
	working: boolean;
}): void => {
	console.log(`
  This is ${phone.model}.
  It has ${phone.ram} gb ram.
  It is in ${phone.working} condition
  `);
};

printPhone(onePlus);

// Transform it in Interface

interface Phone {
	model: string;
	ram: number;
	working: boolean;
}

const apple = {
	model: 'iPhone 15',
	ram: 4,
	working: true,
};

const printDevice = (phone: Phone): void => {
	console.log(`
  This is ${phone.model}.
  It has ${phone.ram} gb ram.
  It is in ${phone.working} condition
  `);
};

printDevice(apple);

// We can also add properties in interface and any type annotation

interface Year {
	year: Date;
	currYear(): string;
}

// Resuable Code with Interface

interface Reportable {
	summary(): string;
}

const drink = {
	name: 'Tea',
	carbonated: false,
	summary(): string {
		return `This is ${this.name}`;
	},
};

const device = {
	model: 'Oppo A9',
	working: true,
	summary(): string {
		return `This phone is ${this.model}`;
	},
};

const printSummary = (item: Reportable) => {
	console.log(item.summary());
};

printSummary(drink);
printSummary(device);
