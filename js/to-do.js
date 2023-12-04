
let taskField = document.querySelector(".tasks");


let deleteTask = document.querySelector(".deleteTask");


let dataMe = document.querySelector(".deleteTask")
console.log(dataMe)
// New One
var todoArr = [];
const taskList = document.querySelector(".TaskLists");



// function add() {
//     todoArr.push(taskField.value);

//     display()
// }

// function display() {
//         // return false
    
//           taskList.innerHTML = ""

//     todoArr.forEach((taskField) =>{
//         taskList.innerHTML += `
//          <li class="NewlistItems" id="listDone">
//          <span class="taskName">
//           ${taskField}
//           <input type="date" name="" id="todoDate">
//           </span>
//             <button class="deleteTask" onclick="deleteTodo()">Delete</button>
//            </li>
//         `
//     }
//     )
    
  
//     console.log(todoArr)
//     taskField.value = ""
// }

// Local Storage
localStorage.setItem("Name",  "Miracle")
let getMyName = localStorage.getItem("Name")
function add() {
    let mak = taskField.value;

    if (taskField.value == 0) {
        alert("Please enter a task to be done")
    }else {
        taskList.innerHTML += `
        <li class="NewlistItems">

           <span class="taskName">
           ${taskField.value.toUpperCase()} 
            <input type="date" name="" id="todoDate">
           </span>
            <button class="deleteTask"  onclick="removeListItem()">Delete</button>
           </li>
        `
         taskField.value = "";
         let completedTask = document.getElementById("FinishedTask");

         console.log(mak.toUpperCase())
        //  console.log(getMyName);
        //  console.log(completedTask)

        // alert(localStorage.removeItem("Name")) 
    }
 
}


function removeListItem(params) {
    let allListsItem = document.querySelector(".NewlistItems");
            var items = taskList.getElementsByTagName("li");
            var myList = document.querySelector(".TaskLists")
            var myText =  document.querySelector(".tasks").value;
            var taslName = document.querySelector(".taskName")
           

  console.log(allListsItem);
  console.log(items);
  console.log(myList)
  console.log(myText);
  console.log(taslName)
  allListsItem.remove(myText)
//  for (let i = 0; i < items.length; i++) {
 
//   if (items[i] === myText) {
//    alert("hi")
//   }
//  }
}
  


// let datasElf = document.getElementById("addTask");
// console.log(datasElf)
// // Get all all the List Items
// datasElf.addEventListener("click", removeListItem)

// function removeListItem() {
//         var items = taskList.getElementsByTagName("li");
//         var DataIndividual = document.querySelector(".tasks")
//         var myList = document.querySelector(".TaskLists")

//     for (let i = items.length - 1; i >=0; i--) {
//   if (items[i].textContent === DataIndividual) {
//     myList.removeChild(items[i])
//   }
    
// }
// alert("hi")
// }





// completedTask.addEventListener("click", function ()  {
//     if (completedTask.checked) {
//         alert("complted")
//     }
// })


// function completed () {
//                  let maner = document.getElementById("FinishedTask");
//                      let listsItems = document.querySelector(".NewlistItems")
// let taskState = document.querySelector(".TaskStaus")
// const items = [`${listsItems}`]
//     if (maner.checked) {
//     //    listsItems.style.textDecoration = " line-through "
//     //    alert("completed")
//   items.splice(2, 1)
//     // listsItems.remove()
//     }else{
//         // listsItems.style.textDecoration = "underline"
//         // alert("Unfinished")
//     }
//     console.log(delete listsItems.childElementCount)
// }



// function deleteTodo() {
//     let listsItems = document.querySelector(".NewlistItems")
// //   listsItems.remove()
// deleteTodo ()
// // console.log(mak)
// // listsItems.remove()
// //  listsItems.remove(listsItems.lastChild) 
// //  items.splice(2, 1);
   
// }
// var myRemove = document.querySelector('.deleteTask');
// //   for (var i = 0; i < myRemove.length; i++) {
// //     var myBtnRemove = myRemove[i];
// myRemove.addEventListener("click", function () {
//     alert('hi')
// })

//   myBtnRemove.addEventListener('click', function  (){
  
//   })
//   function DeleteAll() {
//       var item = this.parentNode.parentNode;
//     var parent = item.parentNode;
//     parent.removeChild(item)
//   }




// function deleteTodo() {
//       let currentTaskList = document.querySelector(".NewlistItems");
// //     //   With the Remove Attribute
// //     currentTaskList.remove()
// //     let alldata = ['One', 'two', 'three']
// //     //  taskList.removeChild(currentTaskList)
  
   
// // //    currentTaskList.forEach(taskList =>{
// // //     taskList.parentNode.removeChild(taskList)
// // //    })
    
// // console.log(alldata)
// //  
// const todoArr = [];
// const 
// }
    
