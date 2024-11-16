// Function to append numbers/operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to perform the calculation
function calculate() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression");
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to handle operators
function operate(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        appendToDisplay(operator);
    }
}
