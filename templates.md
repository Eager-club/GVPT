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

```
# in head linking
```
    <script src="./templates/includeHTML.js" defer></script>
    <link rel="stylesheet" href="./templates/preloder.css">

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
      <script src="script.js"></script>

    </div>
  </body>
```