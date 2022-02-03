function bestFriend(array){
    let name =array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length>name.length){
            name=array[i];
        }
        
    }
    return name;
}
let arr=['Junayed','Sakib','Antu','Talukder Showrov'];
console.log(bestFriend(arr));