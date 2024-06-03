const textPhrases = [
  "Welcome to Dynamic Text Animation",
  "Add a dynamic element to your webpage",
  "Engage your visitors with dynamic content",
  "Create visually appealing text effects",
  "Experiment with different animation techniques"
];

// Function to loop through text phrases and update text element
function updateText() {
  let textElement = document.getElementById('dynamic-text');
  let currentIndex = 0;

  // Update text every 5 seconds
  setInterval(function() {
    textElement.textContent = textPhrases[currentIndex];
    currentIndex = (currentIndex + 1) % textPhrases.length;
  }, 5000); // Change text every 5 seconds
}

// Start updating text when the page loads
window.onload = function() {
  updateText();
};