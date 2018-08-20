console.log('Part 1 & 2');

// Closures
// A function that close over a local variable is called a closure
const multiplier = (factor) => {
	return (num) => {
		return num * factor;
	};
};
const twice = multiplier(2);
console.log(twice(10)); // 20
// All though the function call that created the local variable (factor) no longer exist
// We are able to reference the instance of a local variable in an enclosing function because of Closures.




// First number greater than or equal to 20 that is divisible by 7
for (let i = 20; ; i ++) {
	if (i % 7 === 0) {
		console.log(i);
		break;
	}
}


// Looping Triangle (One Loop)
for (let line = '#'; line.length <=8; line += '#') {
	console.log(line);
}

