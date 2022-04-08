
//prints a table of the powers of 2 that are less than or equal to 2^n.
let num = require("readline-sync");
let n = num.question("Enter the number:");
console.log("power of two")
for(i=1;i<=n;i++)
{
    console.log("2^"+i+"="+Math.pow(2,i))
}