"use strict";
const previousOperationText = document.querySelector('#previous_operation');
const currentOperationText = document.querySelector('#current_operation');
const buttons = document.querySelectorAll('#buttons_container button');
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }
    ;
}
;
const calc = new Calculator(previousOperationText, currentOperationText);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value_btn = e.target?.textContent;
        if (+value_btn || value_btn === ".") {
            calc.addDigit(value_btn);
        }
        else {
            console.log(`operation: ${value_btn}`);
            calc.processOperation(value_btn);
        }
    });
});
