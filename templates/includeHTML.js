  // Fetch and insert the nav template
  fetch('./templates/nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Reinitialize sticky functionality
      initializeStickyNav();
  });

// Function to initialize sticky navigation
function initializeStickyNav() {
  window.addEventListener('scroll', function() {
      var mainNav = document.querySelector('.main-nav');
      var navLogo = document.querySelector('.logo');
      if (window.scrollY > 170) { // Adjust the scroll value as needed
          mainNav.classList.add('sticky');
          navLogo.classList.add('sticky');
      } else {
          mainNav.classList.remove('sticky');
          navLogo.classList.remove('sticky');
      }
  });
}