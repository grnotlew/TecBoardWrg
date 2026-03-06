function carregarPagina() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("favicon").src = "./images/Favicon-dark.svg";
    }
}

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("logo").src = "./images/Logo-light.png";
        document.getElementById("icon-dark-mode").src = "./images/icon-light.svg";
    } else {
        document.getElementById("logo").src = "./images/Logo-dark.png";
        document.getElementById("icon-dark-mode").src = "./images/icon-dark.svg";
    }
}