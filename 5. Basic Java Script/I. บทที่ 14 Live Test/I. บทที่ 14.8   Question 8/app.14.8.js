// function decrypt(msg) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let result = "";

//     for (let char of msg) {
//         // ตรวจสอบว่าเป็นช่องว่างหรือไม่
//         if (char === " ") {
//             result += " ";
//             continue;
//         }

//         // หาตำแหน่งปัจจุบันของตัวอักษร
//         let currentIndex = alphabet.indexOf(char);
        
//         if (currentIndex !== -1) {
//             // บวกไป 5 ตำแหน่ง และใช้ % 26 เพื่อให้มันวนกลับมาที่ A ถ้าเกิน Z
//             let newIndex = (currentIndex + 5) % 26;
//             result += alphabet[newIndex];
//         } else {
//             // กรณีเป็นตัวอักษรที่ไม่อยู่ใน alphabet (เช่น เครื่องหมายคำพูด)
//             result += char;
//         }
//     }
//     return result;
// }

// // ทดสอบการใช้งาน
// console.log(decrypt("xvo")); // "cat"
// console.log(decrypt("ht ivhz dn w")); // "my name is b"




// //สร้าง array a-z
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// //สร้าง func
// function decrypt(text) {
//     let result = "";
    
//     //แยกตัวอักษร
//     for (let char of text) {
//         const lowerChar = char.toLowerCase();
//         const currentIndex = alphabet.indexOf(lowerChar);

//         if (currentIndex !== -1) {
//             // คำนวณตำแหน่งใหม่ (บวกไป 5)
//             // ใช้ % 26 เพื่อให้ Index วนกลับมาเริ่มที่ 0 ใหม่ถ้าเกิน z
//             let newIndex = (currentIndex + 5) % 26;
//             result += alphabet[newIndex];
//         } else {
//             // ถ้าไม่ใช่ตัวอักษร (เช่น ช่องว่าง) ให้ใส่ตัวเดิม
//             result += char;
//         }
//     }
    
//     return result;
// }

// // ทดสอบการใช้งาน
// console.log(decrypt("xvo"));           // result "cat"
// console.log(decrypt("ht ivhz dn w"));  // result "my name is b"




//สร้าง array a-z
//สร้าง func
//แยกตัวอักษร
//หา index ของ input (ไม่สามารถที่จะบอกว่า ... + 5 = คำตอบ)

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrAns = []

function decrypt(str) { // str = xvo
    let splitedStr = str.split('') // ["x","v","o"]

    for (const s of splitedStr) {
        // s = #1 = x , #2 = v , #3 = o
        if (s != ' ') {
            let inputIndex = arr.indexOf(s) //
            // inputIndex + 5 = ตำแหน่งที่คำตอบอยู่
            let indexAns = inputIndex + 5;
            let ansValue = arr[indexAns]; // c v o .... คำตอบหลังถอดรหัส
            if (ansValue) { // indexAns ยังหาเจอ เพราะยังไม่เลย z
                arrAns.push(ansValue)
            } else { // indexAns หาไม่เจอ เพราะเลย z
                //รู้ว่าจำนวนของตัวอักษร a-z มี 26 ตัว
                //inputIndex อยู่ตัวที่เท่าไหร่
                let numOfEnd = (arr.length - 1) - inputIndex
                let newLoop = 5 - numOfEnd
                let ans = arr[newLoop - 1];
                arrAns.push(ans);
            }
        } else {
            arrAns.push(s)
        }
    }

    let answer = arrAns.join("")
    return answer;

}

console.log(decrypt("xvo"));
console.log(decrypt("ht ivhz dn w"));