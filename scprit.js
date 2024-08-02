fetch('./templates/nav.html')
              .then(response => response.text())
              .then(data => {
                  document.getElementById('nav-placeholder').innerHTML = data;
              });