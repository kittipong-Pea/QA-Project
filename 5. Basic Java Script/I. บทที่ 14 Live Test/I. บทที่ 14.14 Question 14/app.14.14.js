// function checkCase(input) {
//   if (input === input.toUpperCase()) {
//     console.log("All Capital Letter");
//   } else if (input === input.toLowerCase()) {
//     console.log("All Small Letter");
//   } else {
//     console.log("Mix");
//   }
// }

// // --- ทดสอบตามตัวอย่างในโจทย์ ---
// checkCase("ABCDEFG");       // ผลลัพธ์: All Capital Letter
// checkCase("abcdefg");       // ผลลัพธ์: All Small Letter
// checkCase("This 's a cat"); // ผลลัพธ์: Mix



// ฟังก์ชันสำหรับเช็คว่าเป็นตัวพิมพ์เล็กทั้งหมดหรือไม่
function isLowerCase(str) {
    return str.toLowerCase() === str;
}

// ฟังก์ชันสำหรับเช็คว่าเป็นตัวพิมพ์ใหญ่ทั้งหมดหรือไม่
function isUpperCase(str) {
    return str.toUpperCase() === str;
}

// ข้อความที่ต้องการนำมาตรวจสอบ
const input = "agSdFDassdfasdFF";

// ตั้ง Flag (ตัวแปรเก็บสถานะ) เริ่มต้นให้เป็น false ทั้งคู่
let haveCapitalLetter = false;
let haveSmallLetter = false;

// แยก String เป็น Array ของตัวอักษรแล้ววนลูปเช็คทีละตัว
input.split("").forEach((letter) => {
    // ถ้าเจอตัวพิมพ์เล็ก ให้เปลี่ยนสถานะ haveSmallLetter เป็น true
    if (isLowerCase(letter)) {
        haveSmallLetter = true;
    }
    // ถ้าเจอตัวพิมพ์ใหญ่ ให้เปลี่ยนสถานะ haveCapitalLetter เป็น true
    if (isUpperCase(letter)) {
        haveCapitalLetter = true;
    }
});

// ตรวจสอบเงื่อนไขเพื่อแสดงผล
if (haveCapitalLetter && haveSmallLetter) {
    // กรณีที่ 1: ถ้ามีทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็กผสมกัน
    console.log("Mix");
} else {
    // กรณีที่ 2: ถ้าไม่ใช่แบบผสม (คือมีอย่างใดอย่างหนึ่ง หรือไม่มีเลย)
    if (haveCapitalLetter) {
        // ถ้ามีแค่ตัวพิมพ์ใหญ่
        console.log("All Capital Letter");
    }
    if (haveSmallLetter) {
        // ถ้ามีแค่ตัวพิมพ์เล็ก
        console.log("All Small Letter");
    }
}