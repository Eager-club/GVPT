# scprit including
```
<script src="./templates/includeHTML.js" defer></script>
```
## using nav bar
```
<header id="nav-placeholder"></header>
```

## using footer bar
```
<footer id="footer-placeholder"></footer>
```
## using preloader 
```
    <section id="preloader-placeholder"></section>
      <script src="./templates/preloader.js"></script>

```
# in head linking
```
    <script src="./templates/includeHTML.js" defer></script>
    <link rel="stylesheet" href="./templates/preloder.css">

```
# styling header background
```
          header {
            background-image: url("image url");
            background-repeat: no-repeat;
            background-position: center;
            background-clip: content-box;
            background-size: cover;
            position: relative;
        }
```
# code is always in btwn main
```
<body>
    <section id="preloader-placeholder"></section>
    <div  class="hidden" id="main-content" >
  
      <header id="nav-placeholder"></header>

      <main>
          <!-- code here -->
          
      </main>
      <footer id="footer-placeholder"></footer>
      <script src="./templates/preloader.js"></script>


    </div>
  </body>
```



scroll to top code


// Button for scrolling to the top
```
.scroll-to-top {
            position: fixed;
            right: 20px;
            background-color: #22316C;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            opacity: 0;
            transition: opacity 0.3s, bottom 0.3s ease; /* Smooth transition for both opacity and bottom */
            z-index: 1000; /* Ensure it appears above other content */
        }
        .scroll-to-top.show {
            opacity: 1;
            box-shadow: 0 0 20px white;
        }
        .scroll-to-top:hover {
            background-color: #e78709;
        }
  <button id="scrollToTop" class="scroll-to-top">
        &#8593; <!-- Unicode character for up arrow -->
    </button>

<scprit>
        const scrollToTopButton = document.getElementById('scrollToTop');
        const footer = document.querySelector('footer');

        // Function to handle scroll events
        function handleScroll() {
            // Show or hide the button based on scroll position
            if (window.scrollY > 100) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
            updateScrollToTopButtonPosition();
        }

        // Function to update the button's position
        function updateScrollToTopButtonPosition() {
            const footerRect = footer.getBoundingClientRect();
            const buttonRect = scrollToTopButton.getBoundingClientRect();

            // Calculate the space between the button and the footer
            const footerTop = footerRect.top;
            const buttonHeight = buttonRect.height;
            const viewportHeight = window.innerHeight;
            const footerBuffer = 10; // Buffer to keep the button above the footer

            if (footerTop < viewportHeight) {
                // Adjust button position to stay above the footer
                const bottomOffset = Math.average(footerTop - buttonHeight - footerBuffer, 20);
                scrollToTopButton.style.bottom = `${bottomOffset}px`;
            } else {
                // Fixed position if not near footer
                scrollToTopButton.style.bottom = '20px';
            }
        }

        // Function to handle scroll-to-top button click
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Add event listeners for scroll and resize events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateScrollToTopButtonPosition);

        // Initial position update
        updateScrollToTopButtonPosition();
</scprit>
```