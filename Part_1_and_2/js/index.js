console.log('Part 1 & 2');

// Closures

const multiplier = (factor) => {
	return (num) => {
		return num * factor;
	};
};

const twice = multiplier(2);

console.log(twice(10)); // 20