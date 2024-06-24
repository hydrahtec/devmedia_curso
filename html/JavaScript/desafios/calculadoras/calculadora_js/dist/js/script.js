"use strict";
const previousOperationText = document.querySelector('#previous_operation');
const currentOperationText = document.querySelector('#current_operation');
const buttons = document.querySelectorAll('#buttons_container button');
class Calculator {
    previousOperationText;
    currentOperationText;
    currentOperation;
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    ;
    addDigit(digit) {
        if (digit === "." && this.currentOperationText?.textContent?.includes('.')) {
            return;
        }
        this.currentOperation = digit;
        this.updateScreen();
    }
    ;
    processOperation(operation) {
    }
    ;
    updateScreen(operationValue = null, operator = null, current = null, previous = null) {
        if (operationValue === null) {
            this.currentOperationText.textContent += this.currentOperation;
        }
        else {
            if (previous === "0") {
                operationValue = current;
            }
            this.previousOperationText.textContent = `${operationValue} ${operator}`;
            this.currentOperationText.textContent = "";
        }
    }
    ;
}
;
const calc = new Calculator(previousOperationText, currentOperationText);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value_btn = e.target.textContent;
        if (+value_btn || value_btn === "." || value_btn === "0") {
            calc.addDigit(value_btn);
        }
        else {
            calc.processOperation(value_btn);
        }
    });
});
