
let num = require("readline-sync");
let a = num.question("Enter FirstNumber:");
let b = num.question("Enter Second Number:");
let c = num.question("Enter Third number:");
let result=(parseInt(a) + (b * c));
console.log(result);
let result1=parseInt(c) + a / b;
console.log(result1);
let result2=a % b + parseInt(c);
console.log(result2);
let result3=a * b + parseInt(c);
console.log(result3);
if(result>result1&&result>result2&&result>result3)
{
    console.log("a+b*c: "+result +" is greater");
}
else if(result1>result&&result1>result2&&result1>result3)
{
    console.log("c+a/b: "+result1 +" is greater");
}
else if(result2>result&&result2>result1&&result2>result3)
{
    console.log("a%b+c: "+result2 +" is greater");
}
else if(result3>result&&result3>result2&&result3>result1)
{
    console.log("a*b+c: "+result3 +" is greater");
}