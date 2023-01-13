
// 2
request = prompt('')
function line(request) {
    return request.length
}
console.log(line(request));
3

// let numA = Number(prompt('Ввести 1 число'))
// let operator = prompt('Symbol')
// let numB = Number(prompt('Ввести 2 число'))

// const calc = (a, b) => {
//     if (operator === '+') {
//         console.log(a, "+", b, " = ", a+b)
//     } else if (operator === '-') {
//         console.log(a, "-", b, " = ", a-b)
//     }else if (operator === '*') {
//         console.log(a, "*", b, " = ", a*b)
//     }else if (operator ==='/') {
//         console.log(a, "/", b, " = ", a/b)
//     }else{
//        console.log('Error'); 
//     }
// }
// calc(numA, numB)
// //1 
let numc = Number(prompt('Ввести 1 число'))
let numd = Number(prompt('Ввести 2 число'))

const nums = (c, d) => {
    return Math.min(c, d)
}
console.log(nums(numc, numd));

