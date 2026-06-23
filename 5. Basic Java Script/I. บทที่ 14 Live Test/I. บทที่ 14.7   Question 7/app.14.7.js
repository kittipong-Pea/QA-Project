function replaceSpace(str) {
    return str.replaceAll(" ", "-");
}

// ทดสอบ
console.log(replaceSpace("Hello world")); // "Hello-world"
console.log(replaceSpace("My name is bob")); // "My-name-is-bob"




function replaceSpace(str) {
    return str.split(" ").join("-");
    
}
// ทดสอบ
console.log(replaceSpace("Hello world")); // "Hello-world"
console.log(replaceSpace("My name is bob")); // "My-name-is-bob"




// function replaceSpace(str) {
//     let replaced = str.replaceAll(' ', '-')
//     return replaced
// }

// let result = replaceSpace("My name is bob")
// console.log(result);