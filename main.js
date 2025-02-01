import students from "./data/students.js";
import army from "./data/army.js";

// Create card
const card = (object) => {
  return `
  <div class="card" style="width: 18rem gap:10px;">
    <img src="${object.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${object.name}</h5>
      <h5 class="card-title">${object.house}</h5>
      <button class="btn btn-danger delete-btn" data-id="${object.id}">Expel</button>
    </div>
  </div>`;
};

// Function to display cards, takes in an array as a parameter and loops over each item adding them to the content bucket then calls another function to locate the div and place the content on it.
const displayCards = (array) => {
  let content = "";
  array.forEach((item) => {
    content += card(item);
  });

  displayInDom("#cards", content);
};

// Utility function finds the div and passes in HTML content
const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};

// Buttons filter
const buttonFilter = (event) => {
  if (event.target.id.includes("Gryffindor")) {
    const Gryffindor = students.filter((item) => item.house === "Gryffindor");
    displayCards(Gryffindor);
  }
  if (event.target.id.includes("Hufflepuff")) {
    const Hufflepuff = students.filter((item) => item.house === "Hufflepuff");
    displayCards(Hufflepuff);
  }
  if (event.target.id.includes("Ravenclaw")) {
    const Ravenclaw = students.filter((item) => item.house === "Ravenclaw");
    displayCards(Ravenclaw);
  }
  if (event.target.id.includes("Slytherin")) {
    const Slytherin = students.filter((item) => item.house === "Slytherin");
    displayCards(Slytherin);
  }
  if (event.target.id.includes("Voldi-Army")) {
    const voldyArmy = army.filter((item) => item.house === "Death Eater");
    displayCards(voldyArmy);
  }
};

// Add event listeners to the buttons
document.getElementById("Gryffindor").addEventListener("click", buttonFilter);
document.getElementById("Hufflepuff").addEventListener("click", buttonFilter);
document.getElementById("Ravenclaw").addEventListener("click", buttonFilter);
document.getElementById("Slytherin").addEventListener("click", buttonFilter);
document.getElementById("Voldi-Army").addEventListener("click", buttonFilter);
