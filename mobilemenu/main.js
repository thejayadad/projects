  // Function to toggle menu visibility
  function toggleMenu() {
    var menuBg = document.querySelector('.menu-bg');
    var menuLinks = document.querySelector('.menu-links');

    menuBg.style.display = (menuBg.style.display === 'block') ? 'none' : 'block';
    menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block';
  }