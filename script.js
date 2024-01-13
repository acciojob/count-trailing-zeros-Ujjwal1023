function trailingZeros(input) {
  // Validate input
  if (typeof input !== 'number' || input < 0 || input > 10000) {
    alert("Invalid input. Please enter a non-negative integer up to 10000.");
    return;
  }

  // Calculate factorial and count trailing zeros
  let factorial = 1;
  let zerosCount = 0;

  for (let i = 2; i <= input; i++) {
    factorial *= i;
  }

  while (factorial % 10 === 0) {
    zerosCount++;
    factorial /= 10;
  }

  // Display the result
  alert(`The number of trailing zeros in the factorial of ${input} is: ${zerosCount}`);
}

// Take input via prompt
const userInput = prompt("Enter a non-negative integer up to 10000:");
const inputNumber = parseInt(userInput);

// Call the function with the user's input
trailingZeros(inputNumber);
