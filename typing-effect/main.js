  const textToType = "Simple Javascript typing effect";

  const typingSpeed = 100;

  let charIndex = 0;

  const typingElement = document.getElementById('typing-text');

  function typeEffect() {
    if (charIndex < textToType.length) {
      typingElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    }
  }

  window.onload = function() {
    typeEffect();
  };