let randomNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("user-input").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
    } else if (userGuess < randomNumber) {
        setMessage("Too low! Try again.");
    } else {
        setMessage("Too high! Try again.");
    }
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}
