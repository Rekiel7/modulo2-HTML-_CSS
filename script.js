// bienvenida
window.onload = function() {
    alert("Bienvenido a mi portafolio simulado");
};
// cambiar texto
const boton = document.querySelector("button");
const parrafo = document.querySelector("section p");
const sobreti= document.querySelector("section h2");
const exitoso= document.querySelector("section #exitoso");

boton.addEventListener("click", function(e) {
    e.preventDefault();
    sobreti.textContent = "Ahora hablo sobre ti";
})
boton.addEventListener("click", function(e) {
    e.preventDefault();
    parrafo.textContent = "Si puedes leer esto es porque eres una persona exitosa";
});
boton.addEventListener("click", function(e) {
    e.preventDefault();
    exitoso.textContent = "exitoso el que lo lea";
});

const proyectos = document.querySelector(".proyectos");

boton.addEventListener("click", function() {
    if (proyectos.style.display === "none") {
        proyectos.style.display = "grid";
    } else {
        proyectos.style.display = "none";
    }
});