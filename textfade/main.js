const textPhrases = [
  "Simple text animation",
  "Add additional text as you like",
  "HTML CSS Javascript only",
  "Have a great day",
];

function updateText(){
  let textElement = document.getElementById('dynamic-text')
  let currentIndex = 0
  setInterval(function() {
    textElement.textContent = textPhrases[currentIndex]
    currentIndex = (currentIndex + 1) % textPhrases.length
  }, 3000)
}
window.onload = function(){
  updateText()
}