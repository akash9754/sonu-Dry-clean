function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load components dynamically
window.onload = function () {
    loadComponent("navbar", "component/navbar.html");
    loadComponent("footer", "component/footer.html");
};
