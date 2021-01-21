// returning a value from a function 

let number = 8;
let anotherNumber = 9;


// passing two values into a function 
function add(n1, n2){
   return n1 + n2
};

function multiply(n1, n2){
   return n1 * n2
}


let sum = add(number, anotherNumber);
let product = multiply (prompt("Enter a number:"), sum);
console.log(product);
