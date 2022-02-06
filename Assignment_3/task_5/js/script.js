function checkFrom(el) {
  var height = document.getElementById('height').value;
  var kilo = document.getElementById('kilo').value;

  var bmi;
  var height_2 = height * height;
  bmi = kilo/height_2;


  if (bmi < 18.5 ) {
    document.write("Your BMI is "+bmi+ " " +",so you are underweight");
  }
  else if (18.5 < bmi && bmi < 24.9) {
    document.write("Your BMI is "+ bmi + " " +", so you have a normal weight.")
  }
  else if (dmi > 24.9) {
    document.write("Your BMI is "+ bmi + " " +", so you are overweight")
  }


  return false;
}
