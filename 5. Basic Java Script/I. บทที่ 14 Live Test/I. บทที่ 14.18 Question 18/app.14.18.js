// function printStars(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = "";
//         for (let j = 1; j <= i; j++) {
//             line += "*";
//         }
//         console.log(line);
//     }
// }

// // ทดสอบด้วย input: 5
// printStars(5);

// function printStars(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = "";
        
//         // 1. วนลูปสร้าง "ช่องว่าง" (Space) เพื่อดันดาวไปทางขวา
//         for (let j = 1; j <= n - i; j++) {
//             line += " "; 
//         }
        
//         // 2. วนลูปสร้าง "ดาว" (*) ต่อท้ายช่องว่าง
//         for (let k = 1; k <= i; k++) {
//             line += "*";
//         }
    
//         console.log(line);
//     }
// }

// // ทดสอบด้วย input: 5
// printStars(5);

// const input = 5;

// for (let i = 1; i <= input; i++) {
//     // ใช้ช่องว่าง " " แทนการใช้เลข 0
//     let spaces = " ".repeat(input - i); 
//     let stars = "*".repeat(i);
    
//     console.log(spaces + stars);
// }


const input = 5;

for (let i = 1; i <= input; i++) {
    let a = "";
    
    // ลูปสำหรับสร้างช่องว่าง (Space)
    for (let j = 1; j <= input - i; j++) {
        a += " ";
    }
    
    // ลูปสำหรับสร้างดอกจัน (*)
    for (let k = 1; k <= i; k++) {
        a += "*";
    }
    
    console.log(a);
}