var first = 10;
var second = 3;
console.log(first,second);
var temp = first;
first = second;
second= temp;
console.log(first,second);
//destructuring
[first,second] = [second,first];
console.log(first,second);
