// function findSpace(str) {
//     let count = 0; // ตัวแปรสำหรับเก็บจำนวนช่องว่าง
    
//     for (let i = 0; i < str.length; i++) {
//         // ตรวจสอบว่าตัวอักษรตำแหน่งนั้นคือช่องว่างหรือไม่
//         if (str[i] === " ") {   //นับช่องว่าง
//             count++; // ถ้าใช่ ให้เพิ่มค่า count ขึ้น 1
//         }
//     }
    
//     return count; // คืนค่าผลรวมช่องว่างทั้งหมด
// }


function findSpace(str) {
    let splitStr = str.split(" ")
    let length = splitStr.length
    let lengthOfSpace = length - 1
    return lengthOfSpace
}

let result = findSpace("Hello world")
console.log(`result is ${result}`);

// ตัวอย่างการใช้งานตามโจทย์
console.log(findSpace("Hello world"));    // result 1
console.log(findSpace("My name is bob")); // result 3
console.log(findSpace("Westride"));       // result 0

