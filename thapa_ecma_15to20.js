// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.
// Position matters a lot.

  //  ➡ Array Destructuring  🏁

  // const myBioData = ['vinod', 'thapa', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  // console.log(myFName);
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);
  
  
  
  // ➡ Object destructuring 🏁
  const myBioData = {
    myFname : 'vinod',
    myLname : 'thapa',
    myAge : 26
  }

  // let age = myBioData.myAge;
  // console.log(age);
  // let myFname = myBioData.myFname;
  // console.log(myFname);

  let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  console.log(myLname);
  
  
// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      let myName = "vinod";
      const myBio = {
        // do check
        myName : "hello how are you?",
        [myName] :"hello how are you?",
        [20 + 6] : "is my age"
      }

      console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  let myname = "vinod thapa";
  let myage = 26;

  const myBioo = {myname,myage}

  console.log(myBioo);
  
  
// 7️⃣Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// 2nd time add one more color on top and tell we need to write it again 
// on myColor array too 

const MyFavColors = [ ...colors, 'yellow', 'black'];

console.log(MyFavColors);


// ES7 features 

// 1: array include 
const color = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = colors.includes('purple');
console.log(isPresent);

// 2: **
console.log(2**3); 




// ES8 Features 

// String padding
// Object.values()
// Object.entries()

const message = 'my name is vinod';
console.log(message);
console.log(message.padStart(5));
console.log(message.padEnd(10));

console.log("#################################")

const person = { name: 'Fred', age: 87 };

console.log( Object.values(person) );
console.log(Object.entries(person));
console.log("#################################")
const arrObj =  Object.entries(person);
console.log(Object.fromEntries(arrObj));
console.log("#################################")


// ES2018

const mperson = { name: 'Fred', age: 88, degree : "mcs" };
const sPerson = { ...mperson };

console.log(mperson);
console.log(sPerson);

// ES2020
// #1: BigInt

let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
console.log( 9007199254740991n + 12n );
const newNum = 9007199254740991n + 12n;

console.log(newNum);
console.log(typeof newNum);


const foo = null //?? 'default string';
console.log(foo);







  
  
  
  
  
  
  
  
