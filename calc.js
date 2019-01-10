
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')



// listening for key presses 
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        // Do something
        console.log('button')
        const key = e.target
        const action = key.dataset.action
        const displayedNum = display.textContent
        console.log(!action)

        // if key does not have a data-action attribute, it must be a number key
        if (!action) {
        console.log('number key!')
        }
    }
    
})

// if key has a data-action + - * or / we know that the key is an operator
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    console.log('operator key!')
}

// if key has a data-action of . clear or = 
if (action === 'decimal!') {
    console.log('decimal key')
}
if(action === 'clear') {
    console.log('clear key!')
}
if (action === 'calculate') {
    console.log('equal key!')
}

