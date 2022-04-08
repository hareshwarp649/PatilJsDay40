
var option=require("readline-sync");
var select=option.question("Select \n1)FeetToInch\n2)InchToFeet\n3)FeetToMeter\n4)meterToFeet\n");

switch(select)
{
    case "1":
        var feet=option.question("Enter feet");
        var feetToinch=12*feet;
        console.log("Feet to Inches: " +feetToinch);
        break;
    case "2":
        var inch=option.question("Enter Inches");
        var inchTofeet=inch/12;
        console.log("Inch to Feet: "+inchTofeet);
        break;
    case "3":
        var feet=option.question("Enter Feet value");
        var feetTometer = feet / 3.281;
        console.log(feetTometer);
        break;
    case "4":
        var meter=option.question("Enter Meter value");
        var meterToFeet = 3.281 * meter;  
        console.log(meterToFeet);
        break;
}