
function toggleMenu(){
  let menuBg = document.querySelector('.menu-bg')
  let menuLinks = document.querySelector('.menu-links')
  menuBg.style.display = (menuBg.style.display === 'block') ? 'none' : 'block'
  menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block'
}