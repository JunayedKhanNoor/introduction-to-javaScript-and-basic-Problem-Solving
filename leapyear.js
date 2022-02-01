function isLeapYear(year) {
  if ((year % 4 == 0 )&& ((year % 400 == 0) || (year % 100 != 0))) {
    console.log("Yes it is Leap Year");
  }else{
    console.log("Yes it is not Leap Year");
  }
}
isLeapYear(2004);

