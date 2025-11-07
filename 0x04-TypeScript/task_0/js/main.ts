interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: "Cornelius",
  lastName: "Alhassan",
  age: 25,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Okafor",
  age: 23,
  location: "Abuja"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JS
const table = document.createElement("table");
const header = table.insertRow();
header.innerHTML = "<th>First Name</th><th>Location</th>";

// Add each student as a row
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

// Add the table to the DOM
document.body.appendChild(table);

