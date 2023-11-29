/*Cambiar navbar a boton de menu  */
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Scrollear a la seccion y borrar icono de menu */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    /*Cambio de Barra de navegacion al bajar en la pagina */
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
};



/*Paleta de colores*/
const colorPicker = document.getElementById('color-picker');
const colorPalette = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');

let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

colorPicker.addEventListener('click', function () {
    colorPalette.style.display = 'block';
});

document.addEventListener('click', function (event) {
    if (!colorPalette.contains(event.target) && event.target !== colorPicker) {
        colorPalette.style.display = 'none';
    }
});

colors.forEach(function (color) {
    color.addEventListener('click', function () {
        mainColor = getComputedStyle(color).getPropertyValue('--color-value');
        document.documentElement.style.setProperty('--main-color', mainColor);
        colorPalette.style.display = 'none';
    });
});

/*Modo Oscuro*/

const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun')

    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {

        document.body.classList.toggle('dark-mode');
    }
})

/* Barra de Navegacion con icono de Menu */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*Boton Leer Mas */
var parrafoVisible = false;

function toggleParrafo() {
    var boton = document.getElementById("boton1");
    var parrafo = document.getElementById("parrafo1");

    if (parrafoVisible) {
        // Si el párrafo es visible, ocultarlo y cambiar el texto del botón
        parrafo.style.display = "none";
        boton.textContent = "Leer Más";
        parrafoVisible = false;
    } else {
        // Si el párrafo está oculto, mostrarlo y cambiar el texto del botón
        parrafo.style.display = "block";
        boton.textContent = "Leer Menos";
        parrafoVisible = true;
    }
}

/*Audio*/
var audio = document.getElementById("miAudio");
var playButton = document.getElementById("easteregg");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});