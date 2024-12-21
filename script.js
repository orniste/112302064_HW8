function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate-btn');

operatorSelect.addEventListener('change', function () {
    const operator = operatorSelect.value;
    switch (operator) {
        case '+':
            calculateButton.textContent = 'Add';
            break;
        case '-':
            calculateButton.textContent = 'Minus';
            break;
        case '*':
            calculateButton.textContent = 'Multiply';
            break;
        case '/':
            calculateButton.textContent = 'Divide';
            break;
    }
});

calculateButton.addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = operatorSelect.value;

    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Error: Please enter valid numbers';
    } else {
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                result = 'Error: Invalid operator';
        }

        if (typeof result === 'number') {
            result = result.toFixed(2);
        }
    }

    document.getElementById('result').textContent = `Result = ${result}`;
});
