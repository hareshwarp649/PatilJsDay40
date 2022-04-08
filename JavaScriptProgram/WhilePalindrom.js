var numri = window.prompt("Vendosni numrin");
numri = parseInt(numri);
while (numri > 9999 || numri < 1000) {
  alert("Number not 4 digits");
  var numri = window.prompt("Vendosni numrin");
  numri = parseInt(numri);
}
var shifra4 = numri % 10;
numri = Math.floor(numri / 10);
var shifra3 = numri % 10;
numri = Math.floor(numri / 10);
var shifra2 = numri % 10;
var shifra1 = Math.floor(numri / 10);

if (shifra4 == shifra1 && shifra2 == shifra3)
  alert("Number palindrome");
else
  alert("Number not palindrome");