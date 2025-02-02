import students from "./data/students.js";
import army from "./data/army.js";

// Create card from the form
const form = document.querySelector("form");

const newStudent = (e) => {
  e.preventDefault();
  const house = getRandomHouse(); // Get random house before creating the object
  const student = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: house,
    img: getHouseImage(house), // Assign a house-specific image
    isExpelled: false,
  };
  students.push(student);
  filterByHouse(house); // Filter and display students by the new student's house
  form.reset();
};

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const getRandomHouse = () => {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return houses[randomIndex];
};

const getHouseImage = (house) => {
  if (house === "Gryffindor") {
    return "https://cdn.ponly.com/wp-content/uploads/Gryffindor-House-Traits-scaled.jpg";
  }
  if (house === "Hufflepuff") {
    return "https://i.redd.it/5nhh4xhyx7s81.jpg";
  }
  if (house === "Ravenclaw") {
    return "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Ravenclaw.jpg";
  }
  if (house === "Slytherin") {
    return "https://i.pinimg.com/236x/30/3f/34/303f342c11e722e3d78cc4d075371dce.jpg";
  }
  if (house === "Death Eater") {
    return "https://i.pinimg.com/originals/6b/0d/ef/6b0def92df569b575b7c7b5f8b21e754.jpg";
  }
};

// Function to expel student
const expelStudent = (id) => {
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    const student = students[studentIndex];
    student.isExpelled = true;
    student.house = "Death Eater"; // Change the house to Death Eater for display in Voldi Army
    army.push(student);
    students.splice(studentIndex, 1);
  } else {
    const armyIndex = army.findIndex((student) => student.id === id);
    if (armyIndex !== -1) {
      const student = army[armyIndex];
      student.isExpelled = false;
      student.house = getRandomHouse(); // Assign a new random house
      students.push(student); // Add the student back to the students array
      army.splice(armyIndex, 1);
    }
  }
  filterByCurrentHouse(); // Maintain the current house filter
};

// Function to filter and display students by the current house
let currentHouse = null;

const filterByHouse = (house) => {
  currentHouse = house;
  const filteredStudents = students.filter(
    (student) => student.house === currentHouse && !student.isExpelled
  );
  displayCards(filteredStudents);
};

const filterByCurrentHouse = () => {
  if (currentHouse) {
    if (currentHouse === "Death Eater") {
      const voldyArmy = army.filter((item) => item.house === currentHouse);
      displayCards(voldyArmy);
    } else {
      filterByHouse(currentHouse);
    }
  }
};

// Create card
const card = (object) => {
  return `
  <div class="card" style="width: 18rem; gap:10px;">
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

  // Add event listeners to expel buttons
  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id, 10);
      expelStudent(id);
    });
  });
};

// Utility function finds the div and passes in HTML content
const displayInDom = (divID, content) => {
  const findDiv = document.querySelector(divID);
  findDiv.innerHTML = content;
};

// Buttons filter
const buttonFilter = (event) => {
  currentHouse = null; // Reset current house
  if (event.target.id.includes("Gryffindor")) {
    filterByHouse("Gryffindor");
  }
  if (event.target.id.includes("Hufflepuff")) {
    filterByHouse("Hufflepuff");
  }
  if (event.target.id.includes("Ravenclaw")) {
    filterByHouse("Ravenclaw");
  }
  if (event.target.id.includes("Slytherin")) {
    filterByHouse("Slytherin");
  }
  if (event.target.id.includes("Voldi-Army")) {
    currentHouse = "Death Eater";
    const voldyArmy = army.filter((item) => item.house === currentHouse);
    displayCards(voldyArmy);
  }
};

// Add event listeners to the buttons
document.getElementById("Gryffindor").addEventListener("click", buttonFilter);
document.getElementById("Hufflepuff").addEventListener("click", buttonFilter);
document.getElementById("Ravenclaw").addEventListener("click", buttonFilter);
document.getElementById("Slytherin").addEventListener("click", buttonFilter);
document.getElementById("Voldi-Army").addEventListener("click", buttonFilter);

// Add event listener to the form
form.addEventListener("submit", newStudent);
