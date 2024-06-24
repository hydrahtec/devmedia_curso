//selecção de elementos
const previousOperationText: Element | null = document.querySelector('#previous_operation');
const currentOperationText: Element | null = document.querySelector('#current_operation');
const buttons: NodeListOf<Element> = document.querySelectorAll('#buttons_container button');

//classe calculadore
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

//instancia da classe calculadora
const calc = new Calculator(previousOperationText, currentOperationText);

//eventos
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value_btn: string = e.target?.textContent;
        
        if (+value_btn || value_btn === ".") {
            calc.addDigit(value_btn);
        } else {
            console.log(`operation: ${value_btn}`);
            calc.processOperation(value_btn);
        }
    });
});