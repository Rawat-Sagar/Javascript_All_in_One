// Events in js

//for button only.
function clicked(){
    console.log('The button was clicked');
}

// window.onload = function(){
//     console.log('The document was loaded');
// }


// eventlistener 'click' on container.
firstcontainer.addEventListener('click',function(){
    // query changes the inner html or inner text also.
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked </b>";
    console.log("clicked on container");
})

//  eventlistener 'mouseover' on conatiner.
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("Mouseover on conatiner");
// })


//  eventlistener 'mouseout' on conatiner.
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("Mouseout on conatiner");
// })

// eventlistener 'mouseup' on conatiner.(by clicking)
// firstcontainer.addEventListener('mouseup',function(){
//     console.log("Mouseup on conatiner");
// })

// eventlistener 'mouseudown' on conatiner.(by releasing)
// firstcontainer.addEventListener('mousedown',function(){
//     console.log("Mouseout on conatiner");
// })















