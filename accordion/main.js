const questions = document.querySelectorAll('.question');

// Add click event listener to each question
questions.forEach(question => {
  question.addEventListener('click', function() {
    // Toggle the 'active' class on the corresponding answer
    this.nextElementSibling.classList.toggle('active');
  });
});