
alert(`🧐 HE | | O`)
let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1ScoreBox = document.getElementById('Player1Score')
const player2scoreBox = document.getElementById('Player2Score')
const player1ScoreUpdate = document.getElementById('Player1ScoreUpdate')
const player2ScoreUpdate = document.getElementById('Player2ScoreUpdate')
const messageText = document.getElementById('message')
const rollBtn = document.getElementById('roll-btn')
const restartBtn = document.getElementById('restart-btn')
const scorebox1 = document.getElementById('scorebox1')
const scorebox2 = document.getElementById('scorebox2')

rollBtn.addEventListener('click', start)
restartBtn.addEventListener('dblclick', startAgain)

function restart() {
    rollBtn.style.display = 'none'
    restartBtn.style.display = 'block'
}

function start() {
    let randomNum = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Score += randomNum
        player1ScoreUpdate.textContent = player1Score
        player1ScoreBox.textContent = randomNum
        scorebox1.classList.remove('active')
        scorebox2.classList.add('active')
        messageText.textContent = 'Player2'
    }
    else {
        player2Score += randomNum
        player2ScoreUpdate.textContent = player2Score
        player2scoreBox.textContent = randomNum
        scorebox2.classList.remove('active')
        scorebox1.classList.add('active')
        messageText.textContent = 'Player1'
    }

    if (player1Score >= 30) {
        messageText.textContent = "Player 1 WIN"
        location.reload();// restart()
    }
    else if (player2Score >= 30) {
        messageText.textContent = "Player 2 WIN"
        location.reload();
    }
    player1Turn = !player1Turn
}

function startAgain() {
    alert('')

    // let player1Score = 0
    // let player2Score = 0
    // let player1Turn = true
    // messageText.textContent = "Player 1 Turn"
    // scorebox2.classList.remove('active')
    // scorebox2.classList.add('active')
    // player1ScoreBox.textContent = "-"
    // player2scoreBox.textContent = "-"
    // player1ScoreUpdate.textContent = "0"
    // player2ScoreUpdate.textContent = "0"
    // rollBtn.style.display = "block"
    // restartBtn.style.display = "none"
}