// Function in JS.
// DRY = Do Not Repeat Yourself.

function avg(a,b){
    return (a+b)/2;
}
c = avg(4,6);
console.log("c : ",c);

// conditional in JS

let age = 18;
if(age>18){
    console.log("You can drink");
}
else{
    console.log("You cannot drink")
}

if(age>32){
    console.log("You are not a kid");
}
else if(age>26){
    console.log("Bachhe nahi rahe");
}
else if(age>22){
    console.log("Yes bachhe nahi rahe");
}
else if(age>18){
    console.log("18 saal ke ho ");
}
else{
    console.log("Bacche ho")
}