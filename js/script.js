"use strict";

////-----------TASK 1 --------------////

let taskOne = document.querySelector(".task-1");
let newDiv;
let newArea;

function creatElementDiv() {
   newDiv = document.createElement("div");
   newDiv.classList.add("show");
   newDiv.textContent =
      "Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.";
   taskOne.append(newDiv);
}
creatElementDiv();

function creatElementTextarea() {
   newArea = document.createElement("textarea");
   newArea.setAttribute("cols", 140);
   newArea.setAttribute("row", 50);
   newArea.classList.add("hide");
   taskOne.append(newArea);
}
creatElementTextarea();

function editElementAfterClickCtrlE() {
   document.body.addEventListener("keydown", (event) => {
      if (event.code === "KeyE" && event.ctrlKey) {
         event.preventDefault();
         newArea.textContent = newDiv.textContent;
         newDiv.classList.add("hide");
         newDiv.classList.remove("show");
         newArea.classList.add("show");
         newArea.classList.remove("hide");
      }
   });
}
editElementAfterClickCtrlE();

function saveElementAfterClickCtrlS() {
   document.body.addEventListener("keydown", (event) => {
      if (event.code === "KeyS" && event.ctrlKey) {
         event.preventDefault();
         newDiv.innerText = newArea.value;
         newArea.classList.add("hide");
         newArea.classList.remove("show");
         newDiv.classList.add("show");
         newDiv.classList.remove("hide");
      }
   });
}
saveElementAfterClickCtrlS();

///------------TASK 2 --------------//////
let salaryList = [
   {
      name: "Olga",
      position: "seller",
      salary: 35000,
   },
   {
      name: "Olena",
      position: "manager",
      salary: 45000,
   },
   {
      name: "Max",
      position: "clerk",
      salary: 25000,
   },
   {
      name: "Ivan",
      position: "director",
      salary: 40000,
   },
   {
      name: "Olexandr",
      position: "engineer",
      salary: 21000,
   },
];

let rowTable = document.querySelector(".rows");
let person = document.querySelector(".person");
let position = document.querySelector(".position");
let salary = document.querySelector(".salary");
let table = document.querySelector(".table");

function fillTable(arr) {
   arr.forEach((item, i) => {
      rowTable.innerHTML += `<tr>
                              <td>${i + 1}</td>   
                              <td>${item.name}</td> 
                              <td>${item.position}</td>
                              <td>${item.salary}</td>
                              </tr>`;
   });
}

fillTable(salaryList);

function sortTable() {
   table.addEventListener("click", (event) => {
      if (event.target.className === "person") {
         salaryList.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (event.target.className === "position") {
         salaryList.sort((a, b) => (a.position > b.position ? 1 : -1));
      } else if (event.target.className === "salary") {
         salaryList.sort((a, b) => a.salary - b.salary);
      }
      rowTable.innerHTML = "";
      fillTable(salaryList);
   });
}

sortTable();

///-------------TASK 3 -------------//////

// // newDiv.addEventListener('mousedown', resizeDiv);

// // function resizeDiv()

// let findSize = e => {
//    e.preventDefault;
//    body.addEventListener('mousemove', start);
//    body.addEventListener("mousemove", finish);
// }
