// defining our 3 variables
// var country, country2, country3, messageToUser;
// country = "Nigeria";
// country2 = "Ghana";
// country3 = "South Africa";


// let buttonActivate = document.getElementById("activate");
// buttonActivate.addEventListener("click", function(){
//     messageToUser = prompt("What is your Country?", `${country}, ${country2}, ${country3} `);
//     messageToUser;
//     if (messageToUser == country) {
//         alert("Good Morning")
//     }else if (messageToUser == country2) {
//         alert("Good Afternoon")
    
//     }else if (messageToUser == country3) {
//         alert("Good Night")
    
//     }else{
//         alert("You are not welcomed to use this app")
    
//     }
// } )

// doing with loops

// let buttonsfor = document.querySelectorAll(".drums").length
// for (let i = 0; i < buttonsfor; i++) {
//     document.querySelectorAll(".drums")[i].addEventListener("click",function() {
//         alert("i got clicked")
//     })
    
// }
// array
let currency=["dollars","pounds","kuwait","euros",40,"jumpman"]

// currency=currency.length
// currency=currency.join("*")
// currency=currency.pop()

// document.getElementById("case").innerHTML= currency;
let popping = currency.pop();
document.getElementById("case").innerHTML = popping;
 let another = document.getElementById("man");
 let foods = ["rice", "beans", "noodles"]
let size = foods.pop();
another.innerHTML = foods;

