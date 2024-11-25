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