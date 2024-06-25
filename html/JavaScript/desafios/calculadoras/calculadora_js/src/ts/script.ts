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
    processOperation(operator: string) {
        //check if current value is empty
        if (this.currentOperationText.textContent === "" && operator !== "C") {
            //change Operation
            if (this.previousOperationText.textContent !== "") {
                this.changeOperation(operator);
            }
            return;
        }

        //get current and previous values
        let operationValue: number;
        let previous: number = +(this.previousOperationText.textContent as string).split(" ")[0];
        let current:number = +(this.currentOperationText.textContent as string);

        switch (operator) {
            case '+':
                operationValue = previous + current;
                this.updateScreen(operationValue, operator, current, previous);
                break;
            case '-':
                operationValue = previous - current;
                this.updateScreen(operationValue, operator, current, previous);
                break;
            case '*':
                operationValue = previous * current;
                this.updateScreen(operationValue, operator, current, previous);
                break;
            case '/':
                operationValue = previous / current;
                this.updateScreen(operationValue, operator, current, previous);
                break;
            case 'DEL':
                this.processDelOperator();
                break;
            case 'CE':
                this.clearCurrentOperator();
                break;
            case 'C':
                this.processClearAllOperator();
                break;
            case '=':
                this.processEqualOperator();
                break;
            default: 
                return;
        } 

    };
    //change values of calculator screen
    updateScreen(operationValue: number | null = null,
         operator: string | null = null,
         current: number | null = null,
         previous: number | null = null): void {
        if (operationValue === null) {
            this.currentOperationText.textContent += this.currentOperation;
        } else {
            // check if previous values is 0, if is just add current value
            if (previous === 0) {
                operationValue = current;
            }
            //add current value to previous
            this.previousOperationText.textContent = `${operationValue} ${operator}`;
            this.currentOperationText.textContent = "";
        }
    };
    //change math operation
    changeOperation(operation: string) {
        const mathOperators: string[] = ["+","-","*","/"];
        
        if (!mathOperators.includes(operation)) {
            return;
        }
        this.previousOperationText.textContent = (this.previousOperationText.textContent as string).slice(0, -1) + operation;
    };
    //DEL a digit
    processDelOperator() {
        this.currentOperationText.textContent = (this.currentOperationText.textContent as string).slice(0, -1);
    };
    //clear current operation
    clearCurrentOperator() {
        this.currentOperationText.textContent = "";
    };
    //clear all operation
    processClearAllOperator() {
        this.currentOperationText.textContent = "";
        this.previousOperationText.textContent = "";
    };
    //processe an operation
    processEqualOperator() {
        let operation: string = (this.previousOperationText.textContent as string).split(" ")[1];
        this.processOperation(operation);
    };
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