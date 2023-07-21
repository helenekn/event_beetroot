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

///-------------TASK 3 -------------//////

// // newDiv.addEventListener('mousedown', resizeDiv);

// // function resizeDiv()

// let findSize = e => {
//    e.preventDefault;
//    body.addEventListener('mousemove', start);
//    body.addEventListener("mousemove", finish);
// }

///------------TASK 2 --------------//////

let personArr = ["Olga", "Olena", "Max", "Ivan", "Olexandr"];
let positionArr = ["manager", "seller", "clerk", "director", "engineer"];
let salaryArr = [15000, 20000, 25000, 40000, 21000];
let rowTable = document.querySelector(".rows");
let person = document.querySelector(".person");
let position = document.querySelector(".position");
let salary = document.querySelector(".salary");
let table = document.querySelector(".table");

function fillTable(arr1, arr2, arr3) {
   arr1.forEach((item, i) => {
      rowTable.innerHTML += `<tr>
                              <td>${i + 1}</td>   
                              <td>${item}</td> 
                              <td>${arr2[i]}</td>
                              <td>${arr3[i]}</td>
                              </tr>`;
   });
}

fillTable(personArr, positionArr, salaryArr);

table.addEventListener("click", (event) => {
   if (event.target === "person") {
      personArr.sort();
   }
   rowTable.innerHTML = "";
   fillTable(personArr, positionArr, salaryArr);
});
