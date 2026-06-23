// function decodeRobert(text) {
//     const vowels = "aeiou";
//     let result = "";
    
//     for (let i = 0; i < text.length; i++) {
//         // เก็บตัวอักษรปัจจุบันลงในผลลัพธ์
//         result += text[i];
        
//         // ถ้าตัวอักษรปัจจุบันเป็นสระ ให้กระโดดข้ามตัวอักษรไป 2 ตำแหน่ง (ตัว 'p' กับ สระซ้ำ)
//         if (vowels.includes(text[i].toLowerCase())) {
//             i += 2;
//         }
//     }
    
//     return result;
// }

// // ทดสอบตามโจทย์
// console.log(decodeRobert("zepelepenapa papapripikapa")); 
// // Output: "zelena paprika"

// console.log(decodeRobert("bapas jepe doposapadnapa opovapa kepemipijapa")); 
// // Output: "bas je dosadna ova kemija"

const input = "zepelepenapa papapripikapa";
let newString = "";

for (let index = 0; index < input.length; ) {
    const char = input[index];
    if (["a", "e", "i", "o", "u"].includes(char)) {
        newString = newString + char;
        index = index + 3;
    } else {
        newString = newString + char;
        index = index + 1;
    }
}

console.log(newString);