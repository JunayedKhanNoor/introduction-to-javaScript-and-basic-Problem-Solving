function convertLength(inch) {
  let feet = inch / 12;
  return feet;
}
let print = convertLength(10);
console.log(print.toFixed(3));

function convertMile(mile) {
  let km = mile * 1.60934;
  return km;
}
let a = convertMile(10);
console.log(a.toFixed(3));