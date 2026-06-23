// function decodeMessage(message) {
//     let result = "";
    
//     for (let i = 0; i < message.length; i++) {
//         let char = message[i].toUpperCase(); // ทำเป็นตัวพิมพ์ใหญ่เพื่อให้เช็คง่าย
//         let charCode = char.charCodeAt(0);

//         // เช็คว่าเป็นตัวอักษรภาษาอังกฤษ A-Z หรือไม่ (ASCII 65-90)
//         if (charCode >= 65 && charCode <= 90) {
//             // ถ้าอยู่ในช่วง A-M (65-77) ให้ +13
//             if (charCode <= 77) {
//                 result += String.fromCharCode(charCode + 13);
//             } 
//             // ถ้าอยู่ในช่วง N-Z (78-90) ให้ -13
//             else {
//                 result += String.fromCharCode(charCode - 13);
//             }
//         } else {
//             // ถ้าเป็นช่องว่างหรือสัญลักษณ์อื่น ให้ใส่กลับไปเหมือนเดิม
//             result += message[i];
//         }
//     }
//     return result;
// }

// // ทดสอบการใช้งาน
// console.log(decodeMessage("A")); // ผลลัพธ์: N
// console.log(decodeMessage("N")); // ผลลัพธ์: A
// console.log(decodeMessage("HELLO")); // ผลลัพธ์: URYYB



let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let ans = []
function converter(str) {

    let splitStr = str.split('');

    for (const s of splitStr) {
        console.log(s);
        if (s != ' ') { // space ?
            let value = String(s).toLowerCase();
            let index = arr.indexOf(value);
            let char = "" // คู่ตรงข้าม
            if (index <= 12) {
                //ชุดแถวบน
                //index + 13
                char = arr[index + 13]
            } else {
                //ชุดแถวล่าง
                // index - 13
                char = arr[index - 13]
            }

            ans.push(char)
        } else {
            ans.push(s)
        }
    }
    console.log(ans.join(''));
}

let result = converter("URYYB VAQVN")