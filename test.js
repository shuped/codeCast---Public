let a = 0; //1
let b = 1; //2

let temp = 0;
let counter = 0;

function fib (count) {
  
  temp = a + b;
  console.log(temp);
  a = b
  b = temp;
  
  counter++;
  
  while (counter <= count) {
    fib();
  }
  
}
console.log(fib(7));

// 1.1.2.3.5.8.13
