  // Fetch and insert the nav template
  fetch('../templates/nav.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // Reinitialize sticky functionality
      initializeStickyNav();
  });
  // Fetch and insert the footer template
  fetch('../templates/footer.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;

  
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
  document.addEventListener("DOMContentLoaded", function () {
    fetch('../templates/preloader.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('preloader-placeholder').innerHTML = data;

        const preloader = document.querySelector(".preloader");
        const mainContent = document.getElementById('main-content');
        let startTime = Date.now();
        
        function hidePreloader() {
          const elapsed = Date.now() - startTime;
          const delay = Math.max(0, 4000 - elapsed);

          setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease-out";
            setTimeout(() => {
              preloader.style.display = "none";
              mainContent.classList.remove('hidden'); // Show main content
              document.body.style.overflow = ''; // Restore scrolling
            }, 500);
          }, delay);
        }

        window.addEventListener("load", hidePreloader);
        setTimeout(hidePreloader, 4000);
      });
  });




