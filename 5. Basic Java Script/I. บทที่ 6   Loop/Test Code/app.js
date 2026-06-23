// let animal = ["Tiger","lion","Cat","Dog"]

// let num =[[2,4,5],[5,6,7],[9,4,5]]

// for (const a of num ){
//     console.log(a);
//     for (const b of a) {
//          console.log(b);
//     }
// }


// const numbers = [1,2,3,4,5,6,7,8,9]

// for (const num of numbers) {
//  console.log(num);   
// }

// const score = {
//     tommy : 50,
//     alice : 40,
//     jan : 89,
//     ball: 80,
//     first: 30
// }


// for (const s in score) {
//     console.log(`score of ${s} is ${score[s]}`);
// }

// let input = prompt("what would you like to do")

// const todos = [];

// while (input != "quit") {
//     if (input == "list") {
//         console.log("*****");
//         if (todos.length > 0) {
//             for (let i = 0; i < todos.length; i++) {
//                 console.log(`${i} : ${todos[i]}`);
//             }
//         } else {
//             alert("List is empty");
//         }
//     } else if (input == "new") {
//         const newtodo = prompt("what is the new todo?")
//         if (newtodo != null) {
//             todos.push(newtodo);
//             console.log(`${newtodo} added to the list`);
//         }
//     } else if (input == "delete") {
//         const index = Number(prompt("Pls enter index to Delete todo?"));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log("Ok Deleted");
//         }
          
//     }
//   input = prompt("what would you like to do");
// }

// console.log("OK Quit");

// function grumpus() { 
//     console.log('ugh...you again...');
//     console.log('for the last time...');
//     console.log('LEAVE ME ALONE!!!');
// }

// grumpus()


// function printHeart(){
//     console.log("<3");
// }
// printHeart();


// function hello(name) {
//     console.log(`Hi ${name}`);
// }

// hello("Tim");
// hello("anna");
// hello("first");

// function test(num) {
//     console.log(num *2);
    
// }
// test(1);
// test(5);




// function rant (message ) {
//     console.log("I hate beets");
// }

// rant()
// rant()
// rant()\


// function findLargest(x, y) {
//   if (x > y) {
//     console.log(`${x} is larger!`);
//   }else if (x < y) {
//     console.log(`${y} is larger!`);
//   }else {
//     console.log(`${x} and ${y} are equal!`);
//   }
// }


// function add(x,y) {
//   let sum = x + y 

//   console.log(`Number is ${sum}`);
//   return sum

// }

// let sum = add(3,5)
// console.log(sum,"sum");



// function add(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i]
//   }
//   return sum ;
// }


// function multiply (x,y) {
//   let sum = x * y
//   console.log(sum);
//   return sum
// }

//   multiply (2,3);
//   multiply (9,9);
//   multiply (5,4);





// function isShortsWeather(temperature) {
//   if (temperature >= 75){
//     console.log("True");
//   }else if (temperature <= 75){
//     console.log("False");
//   }
//   return isShortsWeather
// }


// isShortsWeather(80);
// isShortsWeather(48);
// isShortsWeather(75);



// function lastElement(arr) {
//   if (arr.length === 0) {
//     console.log(null);
//   }
//   let i = arr[arr.length - 1];
//   console.log(i);
//   return lastElement;
// }

// lastElement([3, 5, 7]); 
// lastElement([1]);       
// lastElement([]);        


// function capitalize(str) {
//   let i = str[0].toUpperCase() + str.slice(1);
//   console.log(i);

//   return capitalize;
// }

// capitalize("eggplant");      
// capitalize("pamplemounsse"); 
// capitalize("squid");         

// function sumArray(arr) {
//   let sum = arr.reduce((sum, num) => sum + num, 0);
//   console.log(sum);
//   return sumArray;
// }

// sumArray([1, 2, 3]);     
// sumArray([2, 2, 2, 2]);  
// sumArray([50, 50, 1]);   




// function returnDay(num) {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   if (num < 1 || num > 7) return null;
  
//   let result = days[num - 1];
//   console.log(result);
//   return returnDay;
// }

// returnDay(1); 
// returnDay(7); 
// returnDay(4);
// returnDay(0); 

//  let totalegg = 6

// function collectionegg() {
//     let totalegg = 6

// }

// collectionegg()

//  console.log(totalegg ,"totalegg");



// let square = function (x) {
// let multiply = (x * x)

//  console.log(multiply);

//     return multiply

// }

// square(4);
// square(3);

// function makebetweenfunc(min , max) {
//     return function (val) {
//          return val  >= min && val <= max

//     }
// }

// let inAgeRange =  makebetweenfunc(20,90);

// console.log(inAgeRange(60));


// const square ={
//     area(x){
//         return x * x
//     },
//     perimeter(x){
//         return x * 4
//     } 
// }
// console.log(square.area(10));
// console.log(square.perimeter(10));

// let student = {
//     first : "Alice",
//     last : "Thomas",
//     age :20,
//     fullName(){
//         return `${this.first} ${this.last}`
//     }
// }

// console.log(student.first);
// console.log(student.fullName());



// const hen  ={
//     name : "Helen",
//     eggCount : 0,
//     layAnEgg(){
//         this.eggCount++;
//         return "EGG";
//     }

// }


// console.log(hen.name);        
// console.log(hen.eggCount);   
// console.log(hen.layAnEgg());  
// console.log(hen.layAnEgg()); 
// console.log(hen.eggCount);   




// try {
//     let msg = "Hello World" 
//     msg = msg.toUpperCase()
//     console.log(msg);
// } catch (error) {
//     console.log("Error Please Check");
    
// }


// const num = [3,5,3,4,9]
// function print(n) {
//     console.log(n);
    
// }

// num.forEach(print)


// for (const n of num) {
//     console.log(n);
// }


// const student =[{
//     name : "Kittipong",
//     age : 25,
//     Score : 50
// },
// {
//     name : "Peanpituk",
//     age : 30,
//     Score : 40
// }]

// const newstu = student.map(function (s) {
//     return {
//     name : s.name,
//     Score : s.Score
//     }
// })

// console.log(newstu);




// student.forEach(function(s){
//     console.log(`Score of ${s.name} is ${s.Score}`);
// })


// // for (const s of student) {
// //     console.log(`Score of ${s.name} is ${s.Score}`);
// // }


// const num = [6,2,4,8]

// const result = num.map(function (n) {
//     return n*n

// })

// console.log(result);




// const fullNames = [{first: 'Albus', last:'Dumbledore'},
// {first: 'Harry', last: 'Potter'}, {first: 'Hermione',
// last: 'Granger'}, {first: 'Ron', last: 'Weasley'},
// {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva',
// last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


// const firstNames = fullNames.map(function (fn) {
//     return {
//         first : fn.first
//     }
    
// })
// console.log(firstNames);


// const greet = (name) => {
//     return "Hey " + name + "!";
// }

// console.log(greet("Hagrid"));  
// console.log(greet("Luna"));   

// const students = [
//     {
//         name : "Alice",
//         age : 25,
//         score : 40
//     },
//     {
//         name : "Adam",
//         age : 25,
//         score : 20
//     },
//     {
//         name : "Anna",
//         age : 25,
//         score : 90
//     },
//     {
//         name : "Tom",
//         age : 25,
//         score : 60
//     }
// ]


// Map
// let newstudent = students.map(function (s) {
//     console.log(`Score of ${s.name} is ${s.score}`)
// })

// Arrow Function
// let new2 = students.map((s) =>{
//     console.log(`Score of ${s.name} is ${s.score}`)
// })

// implicit return
// let animal =["tiger","Lion","Cat","Dog"]

// let newanimal = animal.map( (a) =>(
//     a.toLocaleUpperCase()  
// ))
// console.log(newanimal);

// setTimeout
// console.log("Hello");
// setTimeout(() => {
    
// console.log(".....");
// }, 3000);

// console.log("Good Bye");


// setInterval
// setInterval(() => {
//     console.log(Math.random());
// }, 3000);



// let num = [1,2,3,4,5,6,7,8,9]

// let newnum = num.filter( (n) =>  n % 2 === 0)
// console.log(newnum);

// const student = [
//     {
//         name : "mike",
//         score : 40,
//         class : "A"
//     },
//      {
//         name : "Mix",
//         score : 50,
//         class : "B"
//     },
//      {
//         name : "Music",
//         score : 60,
//         class : "A"
//     }
// ]


// let studentnew = student.filter( (s) => s.score >= 50
// )
// console.log(studentnew);




//1
// function validUserNames(usernames) {
//   return usernames.filter(username => username.length < 10);
// }

// //2
// const validUserNames = usernames => usernames.filter(username => username.length < 10);


// function allEvens (arr) {
//   return arr.every(num => num % 2 === 0);
// }
  
// console.log(allEvens([2,4,6,8]));
// console.log(allEvens([1,4,6,8]));
// console.log(allEvens([1,2,3]));   

// const nums = [5,3,4,8,9]

// // let result = nums.reduce (( prevValue , currValue) => {
// //   console.log (prevValue,"prevValue");
// //   console.log (currValue,"currValue");
// //   return prevValue + currValue
// // },0)

// // console.log(result);

// let min = nums.reduce(( priv,crr) => {
//   console.log (priv,"priv");
//   console.log (crr,"crr");
//   if (priv < crr) {
//     return priv
//   } else {
//     return crr
//   }
// })



//1
// function greet (name = "Guest") {
//     return `Hello, ${name}!`;
// }
// console.log(greet());

// //2
// function multiply (a,b=5) {
//     return a * b 
// }
// console.log(multiply(2));

// //3
// function createPerson (name, age = 18) {
//     return {name,age};
// }
// console.log(createPerson("mike"));

// const num = [3,5,8,9]

// console.log(Math.max(...num));


// console.log(Math.max(1,2,3,5,8,9));

// const num1 = [2,4,6]
// const num2 = [8,10]

// console.log(num1.concat(num2));

// let newarr = [...num1,...num2]
// console.log(newarr);


//1
// const numbers = [3,7,2,8,6]
// console.log(Math.max(...numbers));


// //2
// function combineArrays(arr1,arr2) {
//     return [...arr1,...arr2];
// }

// //3
// const word = "Hello" ;
// console.log(...word);

// //4
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// let nwearr2 = [...arr1,...arr2];
// console.log(nwearr2);


// let student ={
//     name : "Tommy",
//     age : 29, 
//     score : 70
// }

// let newstudent = {
//     name : student.name ,
//     age : student.age   , 
//     score : student.score ,
//     ispass : true
// }

// let newstudent ={...student,ipass : true}

// console.log(newstudent);



// //1
// const obj1 = {a : 1,b : 2};
// const obj2 = {c : 3,d : 4 };
// let mergedObj = {...obj1 , ...obj2};

// console.log(mergedObj);

// //2
// const obj ={x : 10, y : 20};
// let newobj = {...obj, z : 30};

// console.log(newobj);


// //3
// const obj4 ={a : 1 , b : 2 , c : 3};
// const obj5 ={c : 4 , d : 5};
// let mergedObj2 ={...obj4 ,...obj5};

// console.log(mergedObj2);



//1
// function includeLast(...items) {
//     return items[items.length - 1];
// }
// console.log(includeLast(2,3,4,1));              
// console.log(includeLast("A","B","C","D"));      


// //2
// function excludeLast (...args) {
//     return args.slice(0, -1)
    
// }
// console.log(excludeLast(2,3,4,1));
// console.log(excludeLast("A","B","C","D"));

// //3
// function sumFirstLast(...num) {
//     let first = num[0];
//     let last = num[num.length -1];
//     return first + last ;
// }
// console.log(sumFirstLast(2,3,4,1));
// console.log(sumFirstLast(4,2,1,8));


// const nums = [1,2,3,4];

// let [one,two,three,four] = nums 

// console.log(one,two,three);

// let [first, ...everyoneElse] = nums

// console.log(first , "First");
// console.log(everyoneElse , "everyoneElse");



//1
// const arr1 = [1,2,3,4,5];

// // let [a,b,c,d,e] = arr1
// // console.log([a,b,c,d,e]);

// //2
// // let [a, ,b, , c] = arr1
// // console.log([a,b,c]);

// // //3
// let[a,...rest] = arr1
// console.log(a,"a");
// console.log(...rest,"rest");


// const runner ={ 
//     first : "Tommy",
//     last : "alice",
//     county : "USA"
// }
// let {first,last} = runner

// console.log(first);


//1
// const person ={
//     name : "Alice",age : 25,city : "Wonderland"};
// let {name,city} = person;

// console.log(name,city);

// // //2
// const person2 ={name : "BoB",age : 30} ;
// let {name : firstName} = person2;

// console.log(firstName)

// //3
// const person3 = {
//     name : "Charlie",
//     country : "Chocolat Factory"
// };

// let { country = "Thailand" } = person3;

// console.log(country);



//1
// function displayPerson({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
// let person = {
//   name: "Mike",
//   age: 29
// };
// displayPerson(person);

// //2
// function getCoords ([x,y]) {
//     return [x,y];
// }
// let num = [1,2];
// console.log(getCoords(num));

// //3
function config({ width = 100, height = 100, color = 'white' } = {}) {
  return { width, height, color };
}
console.log(config({ width: 20, color: 'red' })); 
console.log(config()); 

