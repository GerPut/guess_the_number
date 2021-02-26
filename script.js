//Variables
const button = document.querySelector('.button')
const randomNum = Math.floor(Math.random() * 9 + 1)
const messageOnScreen = document.querySelector('.message')


//Events
button.addEventListener('click', showMessage)


//Functions
function showMessage() {

    const guessNum = document.getElementById("fname").value
    if (guessNum == randomNum) {
        messageOnScreen.innerHTML = "<img src='/images/dolla.jpg' width='450' height='200'>" + "Congratulations!"
        messageOnScreen.style.color = "green"

    } else if (guessNum != randomNum) {
        messageOnScreen.innerHTML = "You lose try again"
        messageOnScreen.style.color = "red"
    }
    event.preventDefault()
}
