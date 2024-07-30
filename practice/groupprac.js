// // Use driving license function here... use numbers as age
// const students = ["virat","rahul","rohit","ali"]
// students.forEach((student)=> console.log(student) )

const students = [17, 18, 20, 50, 65];
const eligible = [];

license = (students) => {
  students.forEach((student) => {
    if (student > 18 && student <= 60) {
      console.log(student);
    }
  });
};

const output = license(students);
console.log(output);


