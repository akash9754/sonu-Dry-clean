function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load components dynamically
window.onload = function () {
    loadComponent("navbar", "./navbar.html");
    loadComponent("footer", "./footer.html");
};
