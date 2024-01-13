function trailingZeros(n) {
  // Validate input
  if (typeof n !== 'number' || n < 0 || n> 10000) {
    alert("Invalid input. Please enter a non-negative integer up to 10000.");
    return;
  }

  // Calculate factorial and count trailing zeros
  let factorial = 1;
  let zerosCount = 0;

  for (let i = 2; i <= n; i++) {
    factorial *= i;;
  }

  while (factorial % 10 === 0) {
    zerosCount++;
    factorial /= 10;
  }

  // Display the result
  alert(`The number of trailing zeros in the factorial of ${n} is: ${zerosCount}`);
}

// Take input via prompt
const userInput = prompt("Enter a non-negative integer up to 10000:");
const inputNumber = parseInt(userInput);

// Call the function with the user's input
trailingZeros(inputNumber);
