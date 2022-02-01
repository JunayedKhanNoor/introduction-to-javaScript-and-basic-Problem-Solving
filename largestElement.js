function largestElement(array){
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]> temp){
            temp = array[i];
        }
        
    }
    return temp;
}
function largeMethod(array){
    let temp2 = Math.max(...array);
    return temp2;
}
function minMethod(array){
    let temp3 = Math.min(...array);
    return temp3;
}
let arr = [1,2,33,4,5,3,66];
console.log(largestElement(arr)); 
console.log(largeMethod(arr));
console.log(minMethod(arr));
