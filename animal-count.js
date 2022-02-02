function animalCount(miles){
    const fisrt10Mile = 10;
    const second10Mile = 50;
    const mileMore20 = 100;
    let count =0;
    if (miles<=10) {
        count = miles*fisrt10Mile;
        return count;
    }
    else if (miles<=20) {
        count = 100+(miles-10)*second10Mile;
        return count;
    }else{
        count = 600+(miles-20)*mileMore20;
        return count;
    }
}
console.log(animalCount(25));