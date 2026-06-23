// let input = 25; // ตัวอย่างเลข input ตามโจทย์

// for (let i = 1; i <= input; i++) {
//     let isPrime = true;

//     if (i < 2) {
//         // เลขที่น้อยกว่า 2 ไม่ใช่จำนวนเฉพาะ (แต่ถ้าโจทย์ต้องการเลข 1 ด้วยตามตัวอย่างภาพ ให้เอาเงื่อนไขนี้ออก)
//         isPrime = i === 1; 
//     } else {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(i);
//     }
// }


const input = 25;

const isPrimeNumber = (num) => {
  let isPrime = true;
  if (num < 2) return false; // เพิ่มเงื่อนไขกรณีเลขน้อยกว่า 2 (1 ไม่ใช่จำนวนเฉพาะ)
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

for (let i = 1; i <= input; i++) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
}