const inputArr = ["++", "++", "--", "++"];

console.log(inputArr.filter((val) => val === "++").length - inputArr.filter((val) => val === "--").length);

// Get number of "++" elements, and "--" as well
// Apply the calculation: ("++" count) - ("--" count)
