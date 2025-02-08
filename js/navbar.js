// Load the navbar from the navbar.html file
document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });
});
