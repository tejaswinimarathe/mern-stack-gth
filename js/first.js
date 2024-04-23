// let a=10;
// let b=20;
// console.log(a+b);

// if(b>30)
// {
//     console.log(b +" is greater");
// }
// else{
//     console.log(b+" is small...");
// }

let myname="Tejaswini";
let charArr=myname.split('');
let count=0;
let temp,i,j;
for(i=0;charArr[i]!=null;i++)
{
    count++;
}
console.log(count);
for(i=0,j=count-1;i<j;i++,j--)
{
    temp=charArr[i];
    charArr[i]=charArr[j];
    charArr[j]=temp;
}
myname=charArr.join('');
console.log(myname);
