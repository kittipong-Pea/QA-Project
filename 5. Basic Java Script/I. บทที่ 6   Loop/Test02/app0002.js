// Exercise 1 หาจำนวนที่มากที่สุดระหว่างเลข 2 ตัว

// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// Exercise 2 หาเครื่องหมายของผลคูณเลข 3 ตัว

// let a = 3;
// let b = -7;
// let c = 2;

// let result = a * b * c;

// if (result > 0) {
//   console.log("The sign is +");
// } else if (result < 0) {
//   console.log("The sign is -");
// } else {
//   console.log("The sign is 0");
// }

// // Exercise 3 เรียงเลข 3 ตัวจากมากไปน้อย

// let a = 0;
// let b = -1;
// let c = 4;

// if (a < b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }
// if (a < c) {
//   let temp = a;
//   a = c;
//   c = temp;
// }
// if (b < c) {
//   let temp = b;
//   b = c;
//   c = temp;
// }

// console.log(a, b, c);


// Exercise 4 หาค่ามากที่สุดจากเลข 5 ตัว

// let a = -5;
// let b = -2;
// let c = -6;
// let d = 0;
// let e = -1;

// let max = a;

// if (b > max) max = b;
// if (c > max) max = c;
// if (d > max) max = d;
// if (e > max) max = e;

// console.log(max);

// Exercise 5 แสดงเลข 0 - 15 ว่าเป็นเลขคู่หรือคี่

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// Exercise 6 แสดงรูปดาวด้วย Nested Loop

// for (let i = 1; i <= 5; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// Exercise 7 หาผลรวมของเลข 0 - 1000 ที่หาร 3 หรือ 5 ลงตัว

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// Exercise 8 หาค่าเฉลี่ยคะแนนและเกรด

// const students = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total += students[i].marks;
// }

// let average = total / students.length;
// let grade;

// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("Average Marks:", average);
// console.log("Grade:", grade);