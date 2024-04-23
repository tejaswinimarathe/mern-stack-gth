
var arr=[1,2,3,4,5,6];
var count=0;
for(var i=0;i<6;i++)
{
 console.log(arr[i]);
  count++;
}
console.log("length of array is:" +count);
arr.push(11);
console.log(arr);
arr.unshift(100);
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

var names=['tejaswini','sanvi','anvi','khhushi','siya','anvi'];
console.log(names.indexOf('anvi',3));
console.log(names.lastIndexOf('anvi'));
console.log(names.includes('sanvi',2));
//includes() function only works in primitive data types it dosent work in object
