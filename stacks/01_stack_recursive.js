console.log("hello stack file")

/*
Calculate the sum of n natural numbers example
Suppose you need to calculate the sum of natural 
numbers from 1 to n using the recursion technique. 
To do that, you need to define the sum() recursively as follows:
*/
function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }

  
  //MY ITERATIVE VERSION OF SUM RECURSION
  function iterationSum(n){
      let sum = 0
      for(let i = n; i > 0; i--){
          sum += i;
    }
    return sum;
}
console.log("sum recursive",sum(10))
console.log("sum iterative",sum(10))


  /*
  In this second example, we will study another very popular example of the recursive function. 
  It is known as finding the factorial of a number. When you talk about finding the factorial of a number, 
  you mean multiplying the number and all the subsequent decreasing values of it till 1.
  
  b! = 1 iff b=0
else if (b-1)! *b iff b>0
  */

function factorial(num){

    if (num === 0) return 1
    if (num === 1) return 1;

    let fact = num;

    fact = fact * factorial(num-1);
    return fact;
}

function iterativeFact(num){
    if (num === 0) return 1
    if (num === 1) return 1;

    for(let i = num - 1; i > 1; i--){
        num = num * i
    }
    return num;
}

console.log("recursive factorial", factorial(12))

console.log("iterative factorial", iterativeFact(12))

/*
given a particular index,
funtion returns the fibonacci number at that index
*/
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

const iterativeFib = (n) => {
    if (n <= 2) return 1;
    let first = 1;
    let second = 1;
    let sum = 0;
    while(n>2){
        sum = first + second;
        first = second;
        second = sum;
        n--
        // console.log(sum)
    }
    return sum;
}
const x = 25;
console.log("recursive fibonacci", fib(x))
console.log("iterative fibonacci", iterativeFib(x))