
let allDrumButtons = document.querySelectorAll(".drum");

// for (let i = 0; i < allDrumButtons; i++) {
//     // const element = array[i];
//     document.querySelectorAll(".drum")[i].addEventlistener("click", handleClick);
    
// }
// function handleClick(){
//     alert("we got clicked")
// }
// let buttons = document.querySelector(".drum");
// buttons.addEventListener("click", function () {
//     alert("I got cliked")
// })

const gadgets = document.querySelectorAll(".drum").length;

for (let i = 0; i < gadgets; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked")
    })
    
}

