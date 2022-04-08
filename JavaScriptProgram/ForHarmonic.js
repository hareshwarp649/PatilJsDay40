
let num = require("readline-sync");
let n = num.question("Enter the number:");
console.log("Enter the Number");
let harmonic=1.0;

for(let i=2; i<=n;i++)
{
    harmonic +=parseFloat(1)/i;
}
console.log(harmonic);