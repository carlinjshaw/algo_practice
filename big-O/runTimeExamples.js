// what is the runtime for the below function?

function foo(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    console.log(sum + ", " + product)
}

//I believe 2* O(N) == O(N)
//correct

//what is the runtime complexity for the following funciton?
function twoArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; i < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                console.log(arr1[i] + "," + arr2[j])
            }
        }
    }
}
//O(A^(B))
//visually I came to realize that this was A * B (number of elements in A * number of elements in B)
//Because nested loops are usually N^2 I jumped to think the answer would be A^B.
//but my reasoning was right!
// answer = O(A*B)

