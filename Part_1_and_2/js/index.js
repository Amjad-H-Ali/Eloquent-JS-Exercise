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


//FizzBuzz
for (let i = 1; i <= 100; i ++) {
	let output = '';

	if (i % 3 === 0) output += 'Fizz';
	if (i % 5 === 0) output += 'Buzz';
	// When none of the above conditions are true, output remains "", thus evaluating to False
	// When left side of OR operatetor is false, it will evaluate to right side.
	console.log(output || i);
}


//Chess Board
let size = 8;
let board = '';

for (let i = 0; i < size; i ++ ) {
	for (let j = 0; j < size; j ++) {
		// Print a block at every other coordinate
		if ((i + j) % 2 === 0) board += '#'
		else board += ' ';	
	}
	board += "\n";
}

console.log(board);




