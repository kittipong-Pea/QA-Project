const playto = document.querySelector('#playto')

let winningScore = 3 ;
let isGameOver = false ;

let p1 ={
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
}

let p2 ={
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
}


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        if (player.score == winningScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}


p1Button.addEventListener('click',function () {updateScore(p1,p2)})
p2Button.addEventListener('click',function () {updateScore(p2,p1)})



const resetButton = document.querySelector('#resetButton')

function reset() {
    isGameOver = false
    p1.score = 0
    p2.score = 0
    p1.display.textContent = 0
    p2.display.textContent = 0
    p1.display.classList.remove('loser','winner')
    p2.display.classList.remove('loser','winner')
    p1.button.disabled = false
    p2.button.disabled = false
}

resetButton.addEventListener('click',reset)


playto.addEventListener('change',function () {
   winningScore = Number(this.value)
   reset()
})

