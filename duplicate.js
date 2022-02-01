//Good way of finding duplicate
function duplicate(array){
    let container = [];
    for (const element of array) {
        if(container.indexOf(element)==-1){
            container.push(element);
        }
    }
    return container;
}
//Alternative way
function duplicateTwo(array){
    let containerTwo = [];
    for (let i = 0; i < array.length; i++) {
        let count =0;
        for (let j = 0; j < containerTwo.length; j++) {
            if(array[i] == containerTwo[j]){
                count++;
            }
            
        }
        if(count == 0){
            containerTwo.push(array[i]);
        }
    }
    return containerTwo;
}
let arr = ["aa","ab","ac","ad","ae","af","ah","al","aa","ad","ah","ad","ab"];
//console.log(duplicate(arr));
console.log(duplicateTwo(arr));
arr = [1,2,3,4,5,6,7,8,2,3,1,2,3,2,1,9]
//console.log(duplicate(arr));
console.log(duplicateTwo(arr));