//selecção de elementos
const previousOperationText: Element | null = document.querySelector('#previous_operation');
const currentOperationText: Element | null = document.querySelector('#current_operation');
const buttons: NodeListOf<Element> = document.querySelectorAll('#buttons_container button');

class Calculator {
    constructor (previousOperationText: Element | null, currentOperationText: Element | null) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    };

    //add digit to calculator screen

    //processe all calculator operation

    //change values of calculator screen

    //change math operation

    //DEL a digit

    //clear current operation

    //clear all operation

    //processe an operation
};

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach(() => {

});