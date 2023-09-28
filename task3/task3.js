let currentInput = '';
let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (value === '.' && currentInput.includes('.')) {
        return;
    }

    currentInput += value;
    displayValue = currentInput;
    updateDisplay();
}

function clearAll() {
    currentInput = '';
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    displayValue = currentInput || '0';
    updateDisplay();
}


function calculatePercentage() {
    try {
        const result = eval(currentInput) / 100;
        currentInput = result.toString();
        displayValue = currentInput;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        displayValue = currentInput;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

updateDisplay();