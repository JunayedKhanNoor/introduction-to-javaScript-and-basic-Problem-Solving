const phones = [{name:'Samsung Galaxy S10', price: 70000, camera: 60, storage: 128 },
{name:'Xiaomi m10', price: 17000, camera: 15, storage: 64 },
{name:'Oppo a12', price: 18000, camera: 10, storage: 64 },
{name:'Walton H1', price: 12000, camera: 8, storage: 32 },
{name:'Samsung Galaxy S8', price: 40000, camera: 20, storage: 64 },
{name:'iPhone X', price: 80000, camera: 12, storage: 64 }]
let chepest = phones[0]
for (const phone of phones) {
    if(phone.price<chepest.price){
        chepest=phone;
    }
}
console.log(chepest);