
const arr = [1,2,3,4,5,6,7,8,9]

let x = 10;
let b = 0;
let res;

while (x > 2) {

    let a = arr[b];

    res =+ a * x;

    x = x - 1;
    b++; 
}

console.log(res);