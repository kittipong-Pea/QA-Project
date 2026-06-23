//EX.01 ลบเครื่องหมายออกจากส่วนท้ายของสตริง 

// function removeLast(x) {
//     if (x.endsWith("!")) {
//         return x.slice(0,-1);
//     }
//     return x ;
// }   

// console.log(removeLast("Hi!"));
// console.log(removeLast("Hi!!!"));
// console.log(removeLast("!Hi"));
// console.log(removeLast("!Hi!"));
// console.log(removeLast("Hi! Hi!"));
// console.log(removeLast("Hi"));


//Ex.02 เขียนฟังก์ชั่นรวมตัวเลขที่รับมา  
// input: 89 process 81 + 92 output: 89
// input: 123 process 11 + 22 + 33  output: 32
// input: 65 process 61 + 52  output: 31
// input: 321 process 31 + 22 + 13  output: 8

// function sumSwap(num) {
//     let str = num.toString();
//     let sum = 0;

//     for (let i = 0; i < str.length; i++) {
//         let value = str[i] + str[str.length - 1 - i];
//         sum += Number(value);
//     }

//     return sum;
// }

// console.log(sumSwap(89));   
// console.log(sumSwap(123));  
// console.log(sumSwap(65));   
// console.log(sumSwap(321));  


// EX.03 หาผลรวมสุดท้ายของตัวเลขที่รับมา 
// ตัวอย่าง
// 39 --> 4 (because 3*9 = 27, 2*7 = 14, 1*4 = 4)
// 999 --> 2 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 4 

// function sum(num) {

//     while (num >= 10) {

//         let digits = String(num).split('');
//         let result = 1;

//         for (let d of digits) {
//             result *= Number(d);
//         }

//         num = result;
//     }

//     return num;
// }

// console.log(sum(39));   
// console.log(sum(999));  
// console.log(sum(4));    



// EX.04 เขียนฟังก์ชันรีเทิร์นค่า ตัวอักษรที่อยู่กึ่งกลางของข้อความ 

// function texts(str) {

//     let len = str.length;
//     let mid = Math.floor(len / 2);

//     if (len % 2 === 0) {
//         return str.slice(mid - 1, mid + 1);
//     } else {
//         return str.slice(mid, mid + 1);
//     }
// }

// console.log(texts("test"));    
// console.log(texts("testing"));  
// console.log(texts("middle"));   
// console.log(texts("a"));        



// EX.05 เขียนฟังก์ชั่นเเสดงข้อความที่มีจำนวนตัวอักษรเท่ากับตำแหน่งของตัวอักษรนั้นๆ 
// ตัวอย่าง
// "abcd" -> "a-bb-ccc-dddd"
// "big" -> "b-ii-ggg"
// "test" -> "t-ee-sss-tttt"

// function repeatText(str) {

//     let result = [];

//     for (let i = 0; i < str.length; i++) {

//         result.push(str[i].repeat(i + 1));

//     }

//     return result.join("-");
// }

// console.log(repeatText("abcd")); 
// console.log(repeatText("big"));  
// console.log(repeatText("test")); 




// EX.06 สร้างฟังก์ชั่นที่หาความแตกต่างของ array 2 ตัว และเรียงจาก น้อยไปมาก 
// ตัวอย่าง
// diffArray ([1, 2, 3],[100, 2, 1, 10]) => [ 3, 10, 100 ]

// function diffArray(arr1, arr2) {

//     let result = [];

//     for (let num of arr1) {
//         if (!arr2.includes(num)) {
//             result.push(num);
//         }
//     }

//     for (let num of arr2) {
//         if (!arr1.includes(num)) {
//             result.push(num);
//         }
//     }

//     return result.sort((a, b) => a - b);
// }

// console.log(diffArray([1, 2, 3], [100, 2, 1, 10]));


// EX.07 สร้างฟังก์ชั่นเรียงเลขคี่ โดยที่เลขคู่จะต้องอยู่ตำแหน่งเดิม 

// function sortOdd(arr) {
//     let oddNumbers = arr
//         .filter(num => num % 2 !== 0)
//         .sort((a, b) => a - b);
//     let index = 0;

//     return arr.map(num => {

//         if (num % 2 !== 0) {
//             return oddNumbers[index++];
//         }

//         return num;
//     });
// }

// console.log(sortOdd([7, 1]));
// console.log(sortOdd([5, 8, 6, 3, 4]));
// console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));


// EX.08 สร้างฟังก์ชันที่รับค่า nums เป็น Array และ target เป็น number จากนั้นให้ รีเทิร์นตำแหน่งของ item ภายใน nums  2ตัวที่มีผลรวมเท่ากับ target 

// function Sum2(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }


// console.log(Sum2([2,7,11,15], 9)); 
// console.log(Sum2([3,2,4], 6)); 


// EX.09 สร้างฟังก์ชันสำหรับคำนวณตู้ขายน้ำ โดยต้องทอนให้ได้เหรียญหรือแบงค์น้อยที่สุด ประเภทเงินทอน [1, 2, 5, 10, 20, 50, 100, 500, 1000] 

// function calculateChange(price, paid) {
//     if (paid < price) {
//         return "เงินไม่พอ";
//     }
//     let change = paid - price;
//     let money = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
//     let result = [];

//     for (let i = 0; i < money.length; i++) {
//         let count = Math.floor(change / money[i]);
//         if (count > 0) {
//             result.push(`${money[i]} บาท = ${count}`);
//             change = change % money[i];
//         }
//     }

//     return result;
// }

// console.log(calculateChange(35, 100));
