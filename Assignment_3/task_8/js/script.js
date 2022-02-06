function checkFrom(el) {
    var numbers = document.getElementById('year').value;
    let a = 0;
    let b = 1;
    let c;
    document.write("0"+"; ");
    for (let i = 0; i < numbers; i++) {
        c = a+b;
        document.write(c + "; ");
        a = b;
        b = c;
        
    }
  
    return false;
  }
