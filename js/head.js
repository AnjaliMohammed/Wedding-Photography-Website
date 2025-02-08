// Load the head.html file into the head of the document
document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/head.html")
        .then(response => response.text())
        .then(data => {
            document.head.innerHTML += data;
        });
});
