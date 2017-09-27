//This is my js file

var exp= 0;
var i= 0;

function runCounter() {
  exp++;
  i+= exp;
  document.getElementById('spinner').style.transform = "rotate("+i+"deg)";
}