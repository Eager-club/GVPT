function includeHTML() {
    var elements = document.querySelectorAll('[data-include]');
    elements.forEach(function(element) {
        var file = element.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('Could not load ' + file);
                    }
                })
                .then(data => {
                    element.innerHTML = data;
                    element.removeAttribute('data-include');
                })
                .catch(error => {
                    console.error(error);
                    element.innerHTML = '<p>Content not found.</p>';
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
