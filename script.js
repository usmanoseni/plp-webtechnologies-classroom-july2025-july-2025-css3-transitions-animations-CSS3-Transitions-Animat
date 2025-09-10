// selecting the ballscroll element
const ballscroll = document.getElementById("ballscroll");

// adding event listener to the start button
function startmotion( ) {
    ballscroll.classList.add("animination");
}
// adding event listener to the stop button

function stopmotion() {
    ballscroll.classList.remove("animination");
}


// code that describe the varible scope and use of function
// global scope variable
let hold = "I am a global variable";

function parmutation() {
    console.log(hold);
}

const area = (lenght, breadth) => {
    let areavalue  = lenght * breadth ; // local scope variable
    return areavalue;
}









parmutation(); // calling the function
let value = area(5, 6); // calling the function and passing the argument 6 and 5 to the function
console.log(` the value of the area = ${value} `); // printing the value return by the function area