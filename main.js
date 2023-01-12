
// 2
// request = prompt('')
//   function deadline(request) {
//     console.log(request.length)
//   }
//   deadline(request)
// 3
let first = prompt("first number");
let operator = prompt("operator");
let second = prompt("second number");

const calc = (a, b) => {
    let total;
    switch (operator) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
    }
}
calc(`${first} ${operator}${second}=${total}`)
// const nums = (c,d)=>{
//     console.log(Math.min(7,22));
// }
// nums();
