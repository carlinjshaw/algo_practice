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


  /*
  In this second example, we will study another very popular example of the recursive function. 
  It is known as finding the factorial of a number. When you talk about finding the factorial of a number, 
  you mean multiplying the number and all the subsequent decreasing values of it till 1.
  
  b! = 1 iff b=0
else if (b-1)! *b iff b>0
  */


  //declaring a function func
function fact(b) {
    //declaring a variable
    var res = 1;
    //for loop to find the factorial of the number
    for (let i = b; i > 1; i--) {
    //fetching and consolidating the result statement
    res *= i;
    }
    //returning the result which contains the factorial of the number b
    return res;
    }