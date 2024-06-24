//selecção de elementos
const previousOperationText: Element | null = document.querySelector('#previous_operation');
const currentOperationText: Element | null = document.querySelector('#current_operation');
const buttons: NodeListOf<Element> = document.querySelectorAll('#buttons_container button');

//classe calculadore
class Calculator {
    previousOperationText: Element | null;
    currentOperationText: Element | null;
    currentOperation: string;

    constructor (previousOperationText: Element | null, currentOperationText: Element | null) {
        
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    };

    //add digit to calculator screen
    addDigit(digit: string) {
        //check if number already has a dot.
        if (digit === "." && this.currentOperationText?.textContent?.includes('.')) {return}
        
        this.currentOperation = digit;
        updateScreen(digit);
    };
    //processe all calculator operation
    processOperation(operation: string) {
        console.log(`operation: ${operation}`);
    };
    //change values of calculator screen
    updateScreen(operationValue: string | null = null,
         operator: string | null = null,
         current: string | null = null,
         previous: string | null = null) {
            
    };
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
        
        if (+value_btn || value_btn === "." || value_btn === "0") {
            calc.addDigit(value_btn);
        } else {
            calc.processOperation(value_btn);
        }
    });
});