const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("", (input) => {
	// Input example: ++ ++ -- ++
	const inputArr = input.split(" ").map((item) => item.trim());

	console.log(inputArr.filter((val) => val === "++").length - inputArr.filter((val) => val === "--").length);
	// Get number of "++" elements, and "--" as well
	// Apply the calculation: ("++" count) - ("--" count)

	rl.close();
});
