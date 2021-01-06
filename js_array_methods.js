let myarr = ["Fan","Camera",34,null,true];
console.log(myarr.length);

myarr.pop();
console.log(myarr);

myarr.push("Sagar");
console.log(myarr);

myarr.shift();
console.log(myarr);

myarr.unshift("ABC");
console.log(myarr);


console.log(myarr.toString());

//Find the index of an item in the Array
let pos  = myarr.indexOf("Camera");
console.log(pos);

//Remove an item by index position
let removeditem = myarr.splice(pos,1);
console.log(removeditem);

let d = [2,3,5,4,6,8,7,1,0];
console.log(d.sort());

// Strings Method in Javascript
let mylovelystring = "Harry is a good boy";
console.log(mylovelystring.length);
console.log(mylovelystring.indexOf("Harry"));
console.log(mylovelystring.indexOf("good"));
console.log(mylovelystring.lastIndexOf("boy"));
console.log(mylovelystring.slice(0,5));

d = mylovelystring.replace("Harry","rohan");
console.log(d);

let mydate = new Date();
console.log(mydate);
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.getDay());
console.log(mydate.getMinutes());

