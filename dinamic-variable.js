// Array of predefined values
const values = ["smartphone", "laptop", "tablet", "smartwatch", "headphones"];

// Object to store variables dynamically
const variables = {};

// Loop to assign values dynamically
for (let i = 0; i < values.length; i++) {
  variables[`var${i + 1}`] = values[i];
}

// Log the variables to verify
console.log(variables);

// Access individual variables
console.log(variables.var1); // Output: "smartphone"
console.log(variables.var2); // Output: "laptop"
