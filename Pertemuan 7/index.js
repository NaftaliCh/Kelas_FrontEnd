//String Literal
//--------------

// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// Halo nama saya John Doe, umur saya 33 tahun dan saya tinggal
// di Manado

// let kalimat5 =
//   "Halo nama saya " +
//   fullName +
//   ", umur saya " +
//   age +
//   " tahun dan saya tinggal di " +
//   address;

// console.log(kalimat5);

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
// console.log(kalimat6);

//Arrow Function
//--------------

// function sayGreetings5(name) {
//   return `Hello ${name}`;
// }

// console.log(sayGreetings5("John"));

// const sayGreetings6 = (name) => {
//   return `Hello ${name}`;
// };

// console.log(sayGreetings6("John"));

//Implicit Return Value
// const sayGreetings6 = (name) => `Hello ${name}`;
// console.log(sayGreetings6("John"));

// //Pada IIFE
// let output1 = (() => `Hello`)();

// //Pada callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);

//Default Parameter
//-----------------

const sayGreetings5 = (fullName, age) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  if (age === undefined) {
    age = 33;
  }
  console.log(`Hello ${fullName}`);
};

sayGreetings5();

const sayGreetings6 = (fullName = "John Doe", age = 33, address = "Manado") => {
  console.log(`Hello ${fullName}`);
};

sayGreetings6();
