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
