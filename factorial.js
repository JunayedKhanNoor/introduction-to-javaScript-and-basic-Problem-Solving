//using for loop
function factorial(n) {
    let fact=1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log("Factorial of " +n+" = " + fact);
}
factorial(4);
//using Recursion
let temp=1;
function recursFact(n){
    if(n<=0){
        console.log("Factorial " +" = " + temp);
        return;
    }
    temp = temp*n;
    recursFact(n-1);
    
}
recursFact(4);
