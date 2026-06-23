// function findRemainder(input) {
//     // หาเศษจากการหารด้วย 3
//     // Math.floor ใช้สำหรับปัดเศษทิ้งให้เป็นจำนวนเต็ม
//     const quotient3 = Math.floor(input / 3);
//     const remainder3 = input - (3 * quotient3);

//     // หาเศษจากการหารด้วย 11
//     const quotient11 = Math.floor(input / 11);
//     const remainder11 = input - (11 * quotient11);

//     console.log(`output: ${remainder3} ${remainder11}`);
// }

// // ทดสอบตามโจทย์
// findRemainder(18);  // output: 0 7
// findRemainder(167); // output: 2 1


const input = 23;

function findRemainder(input, divider) {
    let count = 0;
    for (let i = 0; i <= input; i = i + divider) {
        count++;
    }
    return input - (count - 1) * divider;
}

// ในวิดีโอเขาเทสด้วยเลข 4 แบบนี้ครับ
findRemainder(input, 4)
console.log(findRemainder(input, 4))