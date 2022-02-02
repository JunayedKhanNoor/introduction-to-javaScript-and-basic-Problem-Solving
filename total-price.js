const products = [{name:'Shirt', price: 500, quantity:3},
{name:'Watch', price: 1500, quantity:2},
{name:'iPhone', price: 50000, quantity:1},
{name:'t-shirt', price: 300, quantity:3},
{name:'boxer', price: 200, quantity:3}];
let total=0;
for (const product of products) {
    let totalItemPrice = product.price*product.quantity;
    total +=  totalItemPrice; 
}
console.log(total);