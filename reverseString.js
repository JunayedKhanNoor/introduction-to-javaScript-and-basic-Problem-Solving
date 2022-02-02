//String reverse using built in function
function reverseString(str){
    /* var splitString = str.split("");
    var reverseArray = str.reverse();
    var stringJoin = reverseArray.join("");
    return stringJoin; */
    //whole code in one line
    return str.split("").reverse().join("");
}
//
//string reverse using for  loop
function reverseStringTwo(strTwo){
    let strReverse = "";
    for (let i = 0; i < strTwo.length; i++) {
        strReverse = strTwo[i] + strReverse;
    }
    return strReverse;
}
console.log(reverseString("Hello Who"));
console.log(reverseStringTwo("Hello Who"));