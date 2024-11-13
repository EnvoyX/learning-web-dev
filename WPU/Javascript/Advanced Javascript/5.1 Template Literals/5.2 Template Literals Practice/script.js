// 1. HTML Fragments
const mahasiswa = {
  name: 'Hanif Hafizhan',
  age: 19,
  email: `13523069@mahasiswa.itb.ac.id`,
  studentID: `13523069`,
};

// const el = `<div class="mhs">
// <h2>${mahasiswa.name}</h2>
// <span class="nrp">${mahasiswa.studentID}</span>
// </div>`;

// 2. Looping
const students = [
  { name: 'Hanif Hafizhan', email: `13523069@mahasiswa.itb.ac.id` },
  { name: 'Andi Jafar', email: `13523068@mahasiswa.itb.ac.id` },
  { name: `Soni Adigama`, email: `13523068@mahasiswa.itb.ac.id` },
];

const el = `<div class="students">
    ${students
      .map(
        (student) => `
      <ul>
        <li>${student.name}</li>
        <li>${student.email}</li>
        </ul>`
      )
      .join(``)}
</div>`;

console.log(el);
// 3. Conditionals
// ternary operation

const song = {
  title: `Enemy`,
  artist: `Imagine Dragons`,
  feat: `J.I.D`,
};

// check if feat property avaiable, if does exist fill with feat artist, if not blank
let element = `<div class="song">
    <ul>
    <li>${song.title}</li>
    <li>${song.artist} ${song.feat ? `feat. ${song.feat} ` : ``}</li>
    </ul>
</div>`;

console.log(element);

// 4. Nested
// HTML Fragment nested
const student = {
  name: 'Hanif Hafizhan',
  age: 19,
  semester: 3,
  courses: [
    `Web Devolopment`,
    `Algorithm & Data Structure`,
    `Object Oriented Programming`,
    `Data Analysis`,
  ],
  email: `13523069@mahasiswa.itb.ac.id`,
  studentID: `13523069`,
};

// Functions to be called in to Template Literal
function displayCourses(courses) {
  return `<ol>
        ${courses.map((course) => `<li>${course}</li>`).join(``)}
    </ol>`;
}

const displayStudent = `<div class="student">
    <h2>${student.name}</h2>
    <span class="semester">Semester ${student.semester}</span>
    <h4>Courses Computer Science: </h4>
    <ol>
        ${student.courses.map((course) => `<li>${course}</li>`).join(``)}
    </ol>
    ${displayCourses(student.courses)}

    </div>`;

console.log(displayStudent);

document.body.innerHTML = el;
document.body.innerHTML = element;
document.body.innerHTML = displayStudent;
