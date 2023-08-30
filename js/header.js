// Fetch the contents of header.html
fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the footer element
        document.getElementById('site-header').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching header.html:', error);
    });
