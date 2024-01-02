const profile = {
	user: 'George',
	income: 200,
	coords: {
		lat: 12,
		lan: 18,
	},

	updateIncome(age: number): void {
		this.age = age;
	},
};

// Destructuring Object with annotation

const { income, user }: { income: number; user: string } = profile;
const {
	coords: { lat, lan },
}: { coords: { lat: number; lan: number } } = profile;
