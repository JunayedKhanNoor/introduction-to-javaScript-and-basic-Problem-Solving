var book = {
    title : 'Pro MERN Stack',
    author: 'Vas',
    price: 200,
    publisher: 'apress'
}
console.log(book.title);
book.price = 220;
book["price"] = 230;
console.log(book.price);
var f=2.2222222
console.log(f.toFixed(1));