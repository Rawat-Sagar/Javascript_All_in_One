// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 


// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

const add = (a,b) => {
    return a+b;
}
// // console.log(add(5,2));

const subs = (a,b) => {
    return Math.abs(a-b);
}
const mult = (a,b) => {
    return a*b;
}

const calculator = (num1,num2, operator) => {
  return operator(num1,num2);
}

calculator(5,2,subs)

console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

console.log(calculator(5,6,add));
console.log(calculator(5,6,subs));
console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?


// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 

// 1work = 10min
// 2work = 5s

const fun2 = () => {
  console.log(`Function 2️⃣ is called`);
}

const fun1 = () => {
  console.log(`Function 1✔ is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
}

console.log(fun1());


// Asynchronous JavaScript Prog 

const fun22 = () => {
  setTimeout(()=> {
      console.log(`Function 2️⃣  is called`);
  }, 2000);
}

const fun11 = () => {
  console.log(`Function 1 is called`);
  fun22();
  console.log(`Function 1 is called Again ✌`);
}

fun11();


// //👻 What is Event Loop in JavaScript?
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: let myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

let a = "Hello guys. "; // global scope

const first= () => {  //Parent Functions
  let b = " How are you?"
 
    const second = () => {  //Child Function
    let c = " Hii, I am fine thank you🙏";
    console.log(a+b+c);
    }
    second();
    // console.log(a+b+c); //I can't use C 
}

first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇
const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
      let sum = a+b;
      console.log(`the sum of the two no is ${sum}`);
    }
    innerFun();
}
outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

const outerFunn = (a) => {
  let b = 10;
  const innerFunn = () => {
    let sum = a+b;
    console.log(`the sum of the two no is ${sum}`);
  }
  return innerFunn;
}
let checkClousure = outerFunn(15);
console.log(checkClousure());

// Google Chrome Console
// const outerFunn = (a) => {
//   let b = 10;
//   const innerFunn = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFunn;
// }
// let checkClousure = outerFunn(15);
// console.dir(checkClousure);
// innerFunn()


// "use strict"
// x = "vinod";  //use let , const , var
// console.log(x);
