
const ps=require("readline-sync");
var number = ps.question("Enter a number 1,10,100,1000......\n");
switch(number)
{
    case "1":
        console.log("Unit");
        break;
    case "100":
        console.log("Hundred");
        break;
    case "1000":
        console.log("Thousand");
        break;
    case "10000":
        console.log("Ten Thousand");
        break;
    case "100000":
        console.log("Lakh");
        break;
    case "1000000":
        console.log("Ten lakh");
        break;
    case "10000000":
        console.log("Crore");
        break;
    case "100000000":
        console.log("Ten Crore");
        break;
    default:
        console.log("Invalid number");
        break;
}