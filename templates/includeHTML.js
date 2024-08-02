  // Fetch and insert the nav template
  fetch('../templates/nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Reinitialize sticky functionality
      initializeStickyNav();
  });
  // Fetch and insert the nav template
  fetch('../templates/footer.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;

      // Reinitialize sticky functionality
      initializeStickyNav();
  });
// JavaScript to handle the sticky navigation effect
window.addEventListener('scroll', function() {
  var mainNav = document.querySelector('.main-nav');
  var navLogo = document.querySelector('.main-logo');
  var navLink = document.querySelector('.main-link');
  if (window.scrollY > 170) { // Adjust the scroll value as needed
      mainNav.classList.add('sticky');
      navLogo.classList.add('stick');
      navLink.classList.add('stic');
  } else {
      mainNav.classList.remove('sticky');
      navLogo.classList.remove('stick');
      navLink.classList.remove('stic');
  }
});