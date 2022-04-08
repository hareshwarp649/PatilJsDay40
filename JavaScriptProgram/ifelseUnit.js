
const ps=require("readline-sync");
var number = ps.question("Enter a number 1,10,100,1000......\n");
if(number==1)
console.log("Unit");
else if(number==10)
console.log("Tens!!");
else if(number==100)
console.log("Hundreds!");
else if(number==1000)
console.log("Thousand!");
else if(number==10000)
console.log("Ten Thousand");
else if(number==100000)
console.log("Lakh");
else if(number==1000000)
console.log("Ten Lakh");
else if(number==10000000)
console.log("Crore");
else if(number==100000000)
console.log("Ten Crore");
else
console.log("Wrong Number");