class Calculator {
    constructor() {
        this.num1 = document.querySelector('.number1');
        this.num2 = document.querySelector('.number2');
        this.resolt = document.querySelector('.resolt');

        this.plus = document.querySelector('.plus');
        this.minus = document.querySelector('.minus');
        this.division = document.querySelector('.division');
        this.multiplication = document.querySelector('.multiplication');
        this.equally = document.querySelector('.equally');
    }

    plu() {
        const num = +this.num1.value + +this.num2.value;
        this.resolt.innerHTML = `Result: ${num}`;
    }

    min() {
        const num = +this.num1.value - +this.num2.value;
        this.resolt.innerHTML = `Result: ${num}`;
    }

    div() {
        const num = +this.num1.value / +this.num2.value;
        this.resolt.innerHTML = `Result: ${num}`;
    }

    mul() {
        const num = +this.num1.value * +this.num2.value;
        this.resolt.innerHTML = `Result: ${num}`;
    }
}

const calc = new Calculator();

calc.minus.addEventListener('click', () => {
    calc.min();
});

calc.plus.addEventListener('click', () => {
    calc.plu();
});

calc.division.addEventListener('click', () => {
    calc.div();
});

calc.multiplication.addEventListener('click', () => {
    calc.mul();
});

