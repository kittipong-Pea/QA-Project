function findLastChar(str) {
    return str[str.length - 1];
}

console.log(findLastChar("westride"));
console.log(findLastChar("zoo"));
console.log(findLastChar("student"));
console.log(findLastChar("ox"));


// function findLastChar(str) {
//     let len = str.length // ความยาว/จำนวน
//     let indexOfLastChar = len - 1 // index ที่ตัวสุดท้ายอยู่
//     let result = str[indexOfLastChar]
//     return result
// }

// let ans = findLastChar("westride")
// console.log(ans);