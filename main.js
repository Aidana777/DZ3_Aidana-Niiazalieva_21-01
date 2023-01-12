
// 2
// request = prompt('')
//   function deadline(request) {
//     console.log(request.length)
//   }
//   deadline(request)
// 3
let numA = Number(prompt('Ввести 1 число'))
let symbol= Number(prompt('Знак'))
let numB = Number(prompt('Ввести 2 число'))

const calc = (a, b) => {
    if(symbol=== '+'){
        console.log(a + b + ' сложение')
    } else if(symbol==-'-'){
        console.log(a - b + ' вычитание')
       }else if(symbol==-'*'){
        console.log(a * b + ' умножение')
       }else if(symbol==-'/'){
        console.log(a / b + ' деление')
       }else{
        console.log('Error');
       }
   
   
  
    
}

calc(numA,symbol, numB)

const nums = (c,d)=>{
    console.log(Math.min(7,22));
}
nums();
