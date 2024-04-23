var obj={
    name:"Tejaswini Marathe",
    age:22,
    collage:"Ahmednagar collage"
}
obj.phone=8787654323;
for(var key in obj)
{
    console.log(key+"= "+obj[key]);
}

var no="2";
console.log(typeof(no));

var number=3;
var another_number=3;

var c=number**another_number;
console.log(c);

let age=9;
if(age >=10 && age <=20)
{
    console.log("you can drive...");
}
else if(age<10 || age==10)
{
    console.log("You can also drive..");
}
else if(age>20)
{
   console.log("You can definitly drive");
}
else
{
    console.log("You cant drive...");
}

(age>=20)?console.log("DRIVE...."):console.log("CANT DRIVE.....");

switch(age)
{
    case 0:
        console.log("0");
        break;
    case 24:
        console.log("24....");
        break;
    default:
        console.log("Wrong choice...");        
}

var num=11;
if(num%2==0 && num%3==0)
{
    console.log("Divisible...");
}
else
{
    console.log("Not divisible...");
}