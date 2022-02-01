let fibo =[0,1];
function fibonacci(n){
    //error handaling for wrong input(it's not best way, error through is the best way)
    if(typeof n != 'number'){
        return 'Please give a number' ;
    }

    if(n<2){
        return 'Please give a number greater than 1' ;
    }
    for (let i = 2; i <=n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];   
    }
    return fibo;
}
var result = fibonacci(-9);
console.log(result);