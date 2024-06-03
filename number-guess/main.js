
let randomNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0
function checkGuess(){
    const userGuess = parseInt(document.getElementById("user-input").value)

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        setMessage("Please enter a valid number between 1-100")
        return
    } 
    attempts++
    if(userGuess === randomNumber){
        setMessage(`Congrats! You guess ${randomNumber} in ${attempts} attempts`)
    } else if (userGuess < randomNumber){
        setMessage("To low ")
    } else {
        setMessage("To high")
    }
}
function setMessage(message){
    document.getElementById("message").textContent = message
}