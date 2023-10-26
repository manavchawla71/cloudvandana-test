const display = document.querySelector('input[type="text"]');
const clearButton = document.querySelector(".clear-button");
const buttons = document.querySelectorAll("table td");

let firstOperand = "";
let operator = "";
let secondOperand = "";
let shouldResetDisplay = false;

// Helper function to update the display
function updateDisplay() {
  display.value = firstOperand + operator + secondOperand || "0";
}

// Add click event listener to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText >= "0" && buttonText <= "9") {
      if (shouldResetDisplay) {
        firstOperand = "";
        shouldResetDisplay = false;
      }
      if (!operator) {
        firstOperand += buttonText;
      } else {
        secondOperand += buttonText;
      }
    } else if (buttonText === ".") {
      if (shouldResetDisplay) {
        firstOperand = "";
        shouldResetDisplay = false;
      }
      if (!operator) {
        if (!firstOperand.includes(".")) {
          firstOperand += ".";
        }
      } else {
        if (!secondOperand.includes(".")) {
          secondOperand += ".";
        }
      }
    } else if (["+", "-", "*", "/"].includes(buttonText)) {
      if (firstOperand && secondOperand) {
        firstOperand = operate(firstOperand, secondOperand, operator);
        operator = buttonText;
        secondOperand = "";
      } else if (firstOperand) {
        operator = buttonText;
      }
    } else if (buttonText === "=") {
      if (firstOperand && operator && secondOperand) {
        firstOperand = operate(firstOperand, secondOperand, operator);
        operator = "";
        secondOperand = "";
        shouldResetDisplay = true;
      }
    } else if (buttonText === "AC") {
      firstOperand = "";
      operator = "";
      secondOperand = "";
    }

    updateDisplay();
  });
});

clearButton.addEventListener("click", () => {
  firstOperand = "";
  operator = "";
  secondOperand = "";
  updateDisplay();
});

// Function to perform basic operations
function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "*":
      return (a * b).toString();
    case "/":
      if (b === 0) {
        return "Error";
      }
      return (a / b).toString();
    default:
      return "Error";
  }
}
