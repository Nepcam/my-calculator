/*
Checklist
1. user selects number, display the number 
2. then user select the operator
3. clear screen and display the selects number, and calculate
4. display the answer
*/

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Do something
    }
})

const key = e.target
const action = key.dataset.action

if ('action') {
    console.log('number key!')
}

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

if (action === 'decimal') {
    console.log('decimal key!')
}

if (action === 'clear') {
    console.log('clear key!')
}

if (action === 'calculate') {
    console.log('equal key!')
}
