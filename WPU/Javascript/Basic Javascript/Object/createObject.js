//Create Object
// 1. Object Literal
var mahasiswa = {
  nama: "Muhamad Hanif Hafizhan",
  nim: "13523069",
  email: "13523069@mahasiswa.itb.ac.id",
  jurusan: "Teknik Informatika",
};

var mahasiswa2 = {
  nama: "Andi Jafar",
  nim: "18223001",
  email: "18223001@mahasiswa.itb.ac.id",
  jurusan: "Sistem Teknologi dan Informasi",
};

console.log(mahasiswa);
console.log(mahasiswa2);

// 2. Function Delcaration
function createObjectMahasiswa(name, studentId, email, major) {
  var student = {};
  student.nama = name;
  student.nim = studentId;
  student.email = email;
  student.jurusan = major;
  return student;
}

var mahasiswa3 = createObjectMahasiswa(
  "Soni",
  "13523090",
  "13523090@mahasiswa.itb.ac.id",
  "Teknik Informatika"
);

console.log(mahasiswa3);

// 3. Constructor
function Student(name, studentId, email, major) {
  this.name = name;
  this.studentId = studentId;
  this.email = email;
  this.major = major;
}

var student = new Student(
  "Aldo",
  "13523066",
  "13523066@mahasiswa.itb.ac.id",
  "Computer Science/Informatics Engineering"
);

console.log(student);
