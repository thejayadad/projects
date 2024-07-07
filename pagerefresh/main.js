setTimeout(function() {
    document.body.style.backgroundColor = '#f5f5f5'; // Change background color to new color
    document.querySelector('.loader').classList.remove('fade-in'); // Remove fade-in animation class from loader
    document.body.classList.remove('animation'); // Remove fade-out animation class from body
  }, 2000); // Adjust the timeout duration according to your actual loading time

  // Add fade-in animation class to loader after content is loaded
  window.onload = function() {
    document.querySelector('.loader').classList.add('fade-in');
  };

