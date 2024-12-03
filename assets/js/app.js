

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuCelular = document.querySelector("[data-overlay]");

const msflix = [navCloseBtn, menuCelular, navOpenBtn]; // Incluindo navOpenBtn aqui também para alternar entre abrir e fechar

for (let i = 0; i < msflix.length; i++) {
    msflix[i].addEventListener("click", function () {
        navbar.classList.toggle("actve"); // Muda para 'actve'
        menuCelular.classList.toggle("actve"); // Muda para 'actve'
    });
}


var anitexto = document.querySelector("#text");
var intervalo = 100;
var text = "Geramos resultados incríveis com baixo investimento";

function EsTexto(anitexto, text, intervalo) {
    var char = text.split("").reverse();
    var tipo = setInterval(function () {
        if (!char.length) {
            return clearInterval(tipo);
        }
        var next = char.pop();
        anitexto.innerHTML += next;
    }, intervalo);
}

EsTexto(anitexto, text, intervalo);
