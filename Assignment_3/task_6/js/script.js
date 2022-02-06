function checkFrom(el) {
  var year = document.getElementById('year').value;
  var four = year / 4;
  var hundred = year / 100;
  var fhundred = year / 400;
  if (year % 4 == 0 && year % 100 == 0 && year % 400 ==0) {
    document.write(year+" "+ "It is leap year.");
  }
  else{
    document.write(year +" "+ "It is not leap year.");
  }

  return false;
}
