
// 2
// request = prompt('')
//   function line(request) {
//     console.log(request.length)
//   }
//   line(request)
// 3

let numA = Number(prompt('Ввести 1 число'))
let operator = prompt('Symbol')
let numB = Number(prompt('Ввести 2 число'))

const calc = (a, b) => {
    if (operator === '+') {
        console.log(a, "+", b, " = ", a+b)
    } else if (operator === '-') {
        console.log(a, "-", b, " = ", a-b)
    }else if (operator === '*') {
        console.log(a, "*", b, " = ", a*b)
    }else if (operator ==='/') {
        console.log(a, "/", b, " = ", a/b)
    }else if (numA,numB === 0) {
        console.log('Error')
    }else{
       console.log('Error'); 
    }
}
calc(numA, numB)
//1 
// let numc = Number(prompt('Ввести 1 число'))
// let numd = Number(prompt('Ввести 2 число'))

// const nums = (c,d)=>{
//     console.log(Math.min(c,d));
// }
// nums(numc,numd);
