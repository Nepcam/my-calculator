// // Checklist
// // 1. user selects number, display the number 
// // 2. then user select the operator
// // 3. clear screen and display the selected number, and calculate
// // 4. display the answer


// const calculator = document.querySelector('.calculator')
// const keys = document.querySelector('.calculator__keys')
// const display = document.querySelector('calculator__display')
// const key = e.target
// const action = key.dataset.action
// const keyContent = key.textContent
// const displayedNum = display.textContent

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
       
//         // // Do something
//         // Array.from(key.parentNode.children)
//         //     .forEach(k => k.classList.remove('is-depressed'))
//     }
//     if ('action') {
//         console.log('number key!')
//     }
    
//     if (
//         action === 'add' ||
//         action === 'subtract' ||
//         action === 'multiply' ||
//         action === 'divide'
//     ) {
//         console.log('operator key!')
//         key.classList.add('is-depressed')
//     }
    
//     if (action === 'decimal') {
//         console.log('decimal key!')
//         display.textContent = displayedNum + '.'
//     }
    
//     if (action === 'clear') {
//         console.log('clear key!')
//     }
    
//     if (action === 'calculate') {
//         let firstValue = calculator.dataset.firstValue
//         const operator = calculator.dataset.operator
//         const secondValue = displayedNum
//         console.log('equal key!')
//     }
    
//     if (!action) {
//         if (displayedNum === '0') {
//             display.textContent = keyContent
//         }
//     }
    
//     if (!action) {
//         if (displayedNum === '0') {
//             display.textContent = keyContent
//         } 
//         else {
//             display.textContent = displayedNum + keyContent
//         }
//     } 
    
//     if (firstValue) {
//         if (previousKeyType === 'calculate') {
//             firstValue = displayedNum
//         }
//     display.textContent = calculate(firstValue, operator, secondValue)
//     }
//     calculator.dataset.previousKeyType = 'calculate'
// })







  