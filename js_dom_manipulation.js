console.log(document);

console.log(document.location);


// console mode :
// document.getElementById('click').click()
// document.getElementById('click').style.border = "5px solid red"


let elem = document.getElementById('click');
console.log(elem);

let elemclass = document.getElementsByClassName('container');
console.log(elemclass);

// elemclass[0].style.background = "yellow";
// elemclass[1].style.background = "green";


// add via css property.
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

elemclass[0].classList.remove("text-success");


console.log(elemclass[0].innerHTML);

console.log(elemclass[0].innerText);
console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByTagName('div'));

tn = document.getElementsByTagName('div');
console.log(tn);

//appendChild - add
createdelemnt = document.createElement('p');
createdelemnt.innerText = "This is created para";
tn[0].appendChild(createdelemnt);

// repalceChild - replace with other child
createdelemnt2 = document.createElement('b');
createdelemnt2.innerText = "This is created bold";
tn[0].replaceChild(createdelemnt2,createdelemnt);


//removeChild - remove 
//removeChild(element); ---> removes an element

console.log(document.title);
console.log(document.URL);
console.log(document.scripts);
console.log(document.links);
console.log(document.domain);


//Selecting using Query
sel = document.querySelector('.container')
console.log(sel);

sel = document.querySelectorAll('.container')
console.log(sel);








