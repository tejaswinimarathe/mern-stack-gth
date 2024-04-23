function fun()
{
    var a=10;
    var b=20;
    var c=a+b;
    console.log(c);
}
fun();

function fun2( num1, num2)
{
    var add=num1+ " "+num2;
    console.log(add);
}
fun2("Tejaswini","Marathe");

var sum=(a,b)=>{
    var add=a+b;
    console.log(add);
}
sum(3,2);

var mult=(num1,num2)=>
{
    var cal=num1*num2;
    return cal;
}
var y=mult(2,3);
console.log(y);

let obj=
{
    "rohan":88,
    "sushant":99,
    "madhav":66
}
for(var marks in obj)
{
    var show=marks+" = "+obj[marks];
    console.log(show);
}

var name="Tejaswini";
console.log(name+name.length);
