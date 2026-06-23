// const v2 = document.querySelector('#v2')

// // เเบบที่1
// // v2.onclick = function () {
// //     alert('You click me v2')  
// // }
// // เเบบที่2
// // function clickme() {
// //     alert('click me ')  
// // }
// // v2.onclick = clickme
// // เเบบที่3 arrow function
// v2.onclick =() => {alert('You Click me2')}

// v2.onmouseenter =() =>{
//     console.log("Hii")
// }


//////////////////////////////////////////////////////////


// v3.addEventListener("click", function () {
//     alert('Hello V3')
// })

// v3.addEventListener("click", () => {
//     alert('Hello V3')
// })

// function clicked() {
//     alert('Hello V3')
// }

// v3.addEventListener("click", clicked)




// const p = document.querySelector("#color")
// const btn = document.querySelector("#btn")

// btn.addEventListener("click", function () {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)

//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`
// })

// function randomColor() {
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
//     let color = `rgb(${r},${g},${b})`;
//     return color
// }

const form = document.querySelector('#shelterForm')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(e);
    console.log("Submit");
})


const input = document.querySelector('#inputty')
const span = document.querySelector('span')
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newinput = input.value
    span.append(newinput)
})
input.addEventListener("change", function (params) {
    console.log("Input");
})
