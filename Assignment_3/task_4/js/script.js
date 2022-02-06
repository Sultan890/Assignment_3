function checkFrom(el) {
  var name = document.getElementById('old').value;
  var days = 365;
  var weeks = 52;
  var months = 12;
  days *=name;
  weeks *=name;
  months *= name;

  document.write("You have "+" "+days+" "+"days"+", "+weeks+" "+"weeks,"+" "+"and"+" "+months+" "+"month");

  return false;
}
