const input = [4, 6, 7, 1];

let min = input[0];
let max = input[0];

for (let i = 1; i < input.length; i++) {
    if (input[i] < min) {
        min = input[i];
    }
    if (input[i] > max) {
        max = input[i];
    }
}

console.log(`min -> ${min}`); // min -> 1
console.log(`max -> ${max}`); // max -> 7




const input2 = [2,4,5,6,1,0,8]

let min2 = input2[0];
let max2 = input2[0];

input2.forEach(function (num) {
    if (num < min2 ) min2 = num
    if (num > min2 ) max2 = num
})

console.log(`min2 -> ${min2}`);
console.log(`max2 -> ${max2}`); 
