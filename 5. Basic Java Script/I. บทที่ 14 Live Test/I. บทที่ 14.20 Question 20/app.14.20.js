// function solution(numbers) {
//     // 1. สร้าง Set เพื่อเก็บเศษที่ได้จากการ Modulo
//     const remainders = new Set();

//     // 2. วนลูปผ่าน Array ทุกตัว
//     for (let num of numbers) {
//         // 3. หาเศษจากการหารด้วย 42 แล้วเก็บเข้า Set
//         let res = num % 42;
//         remainders.add(res);
//     }

//     // 4. คืนค่าจำนวนสมาชิกใน Set (ซึ่งจะเป็นจำนวนเศษที่ไม่ซ้ำกัน)
//     return remainders.size;
// }

// // --- ทดสอบตามตัวอย่างในโจทย์ ---
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 10
// console.log(solution([42, 84, 252, 420, 840, 126, 42, 84, 420, 126])); // Output: 1 (เพราะเศษเป็น 0 ทั้งหมด)
// console.log(solution([39, 40, 41, 42, 43, 44, 82, 83, 84, 85])); // Output: 6

const input = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];

let remainder = [];
let uniqueNumbers = [];

input.forEach((num) => {
    const r = num % 42;
    remainder.push(r);
});

console.log(remainder);
// [ 39, 40, 41, 0, 1, 2, 40, 41, 0, 1 ]

remainder.forEach((currentNumber) => {
    let isUnique = true;
    uniqueNumbers.forEach((uniqueNumber) => {
        if (currentNumber === uniqueNumber) {
            isUnique = false;
        }
    });

    if (isUnique) {
        uniqueNumbers.push(currentNumber);
    }
});

console.log(uniqueNumbers.length);