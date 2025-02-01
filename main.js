import {students.js} from "/data/students.js";

//select form
const form = document.querySelector("form");

//create house card
const createStudentCard = (e) => {
  e.preventDefault();
  const newStudent = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
  };
  students.push(newStudent);
  createCards(students);
  form.reset();
};

form.addEventListener("submit", createStudentCard);
const userHouse = document.querySelector("#userHouse");

// create a function that updates the id passing in the html cards;
const displayCards = (divId, htmlRender) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = htmlRender;
};

//function that creates a card and then calls the function to display each card
const createCards = (array) => {
  let cardInfo = "";
  for (const person of array) {
    cardInfo += `<div class="card" style="width: 15rem;">
      <h5 class="card-title">${person.name}</h5>
      <h6>${person.id}</h6>
      <h2>Gryffindor!</h2>
      </div>`;
  }
  displayCards("#userHouse", cardInfo);
};
