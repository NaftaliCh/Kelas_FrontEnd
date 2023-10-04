// Array

// let students = ["john", "bob", "peter", "jack"];
// let numbers = [1, 2, 3, 4, 5];
// let john = ["john", "doe", 33, true];

// console.log(students);
// console.log(numbers);
// console.log(john);

// console.log(students[2]);
// students[2] = "Bob";
// console.log(students);

// console.log(students.length);
// console.log(students[students.length - 1]);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// //Array Method
// //toString()
// console.log(john.toString());
// //join()
// console.log(john.join(" "));
// console.log(john.join("#"));
// console.log(john.join("..."));
// //pop()
// john.pop();
// console.log(john);
// //push
// john.push("Good morning");
// console.log(john);
// //shift
// john.shift();
// console.log(john);
// //unshift
// john.unshift("Hello");
// console.log(john);
// //splice
// john.splice(3, 0, true);
// console.log(john);
// john.splice(2, 1, 35);
// console.log(john);
// //slice
// let john2 = john.slice(2, 4);
// console.log(john2);

// let combineArray = students.concat(john, numbers);
// console.log(combineArray);

//Object
// let john = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 33,
//   isMarried: true,
//   grade: [80, 90, 100],
//   address: {
//     city: "Manado",
//     province: "Sulawesi Utara",
//     postalCode: "95371",
//   },
//   sayGreetings: function () {
//     console.log("Helo my name is " + this.firstName);
//   },
// };

//Dot notation
// console.log(john.firstName);
// console.log(john.grade[1]);
// console.log(john.address.city);
// console.log(john.sayGreetings());

//Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][1]);
// console.log(john["address"]["city"]);
// console.log(john["sayGreetings"]());

// john.job = "Teacher";
// console.log(john);

//Array Object
let students = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "jane",
  },
  {
    id: 3,
    name: "Bob",
  },
];

// students.forEach(function (item) {
//   console.log(item.name);
// });

// let output = students.map(function (item) {
//   return item.name;
// });
// console.log(output);

// let output = students.filter(function (item) {
//   return item.name === "john";
// });
// console.log(output);

let output = students.find(function (item) {
  return item.name === "john";
});
console.log(output);
