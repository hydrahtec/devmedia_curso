//selecção de elementos
const previousOperationText: HTMLElement = document.querySelector('#previous_operation') as HTMLElement;
const currentOperationText: HTMLElement = document.querySelector('#current_operation') as HTMLElement;
const buttons: NodeListOf<Element> = document.querySelectorAll('#buttons_container button');

//classe calculadore
class Calculator {
    previousOperationText: HTMLElement ;
    currentOperationText: HTMLElement ;
    currentOperation: string;

    constructor (previousOperationText: HTMLElement, currentOperationText: HTMLElement) {
        
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    };

    //add digit to calculator screen
    addDigit(digit: string): void {
        //check if number already has a dot.
        if (digit === "." && this.currentOperationText?.textContent?.includes('.')) {return}
        
        this.currentOperation = digit as string;
        this.updateScreen();
    };
    //process all calculator operation
    processOperation(operation: string) {
        //console.log(`operation: ${operation}`);
    };
    //change values of calculator screen
    updateScreen(operationValue: string | null = null,
         operator: string | null = null,
         current: string | null = null,
         previous: string | null = null): void {
        if (operationValue === null) {
            this.currentOperationText.textContent += this.currentOperation;
        } else {
            // check if previous values is 0, if is just add current value
            if (previous === "0") {
                operationValue = current;
            }
            //add current value to previous
            this.previousOperationText.textContent = `${operationValue} ${operator}`;
            this.currentOperationText.textContent = "";
        }
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
        
        const value_btn: string = (e.target as HTMLElement).textContent as string;
        
        if (+value_btn || value_btn === "." || value_btn === "0") {
            calc.addDigit(value_btn);
        } else {
            calc.processOperation(value_btn);
        }
    });
});