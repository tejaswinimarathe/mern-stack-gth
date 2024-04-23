//Uppercase to lower case
var myname="TEJASWINI";
var arrName=myname.split('');
var len=arrName.length;
console.log(len);
for(var i=0;i<len;i++)
{
    let charCode = arrName[i].charCodeAt(0);
    if(charCode>=65 && charCode<=92)
    {
        arrName[i]=String.fromCharCode(charCode+32);
    }
}
myname=arrName.join('');
console.log(myname);