/*Barra de Navegacion*/
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".barra-nav");

    if (window.scrollY > 50) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
});

/*video*/
let video=document.getElementById("mivideo");
let botonPlay=document.querySelector("#play");
let botonPause=document.querySelector("#pause");
let tiempoActual;

window.addEventListener("load", () => {
    let duracionModificada=transformarTiempo(video.duration);
    let duracionElemento = document.querySelector(".duracion");
    if (duracionElemento) duracionElemento.textContent=duracionModificada;
});

if (botonPlay && botonPause && video) {
    botonPlay.addEventListener("click", () => {
        video.play();
        tiempoActual=setInterval( () => {
        let tiempoActual=document.querySelector("#actual");
        if (tiempoActual)
            tiempoActual.textContent=transformarTiempo(video.currentTime);
        },1000);
    });

    botonPause.addEventListener("click", () => {
        video.pause();
        clearInterval(tiempoActual);
    });
}

const transformarTiempo=(tiempo) => {
    if(tiempo>=60){
        let minutos=Math.floor(tiempo/60);
        let segundos=(tiempo%60).toFixed(0);
        return `${minutos}:${segundos.padStart(2,"0")}`;
    }else{
        let segundos=(tiempo%60).toFixed(0);
        return `00:${segundos.padStart(2,"0")}`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll('.tarjeta');

    function mostrarTarjetas() {
        tarjetas.forEach(tarjeta => {
            const rect = tarjeta.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                tarjeta.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', mostrarTarjetas);
    mostrarTarjetas();
});

/*Animacion de tarjetas pagina historia*/
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasIzqImg = document.querySelectorAll('.tarjeta-izquierda-img');
    const tarjetasDerTxt = document.querySelectorAll('.tarjeta-derecha-txt');
    const tarjetasIzqTxt = document.querySelectorAll('.tarjeta-izquierda-txt');
    const tarjetasDerImg = document.querySelectorAll('.tarjeta-derecha-img');

    function animarTarjetas(tarjetas) {
        tarjetas.forEach(tarjeta => {
            const rect = tarjeta.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                tarjeta.classList.add('visible');
            }
        });
    }

    function mostrarTarjetas() {
        animarTarjetas(tarjetasIzqImg);
        animarTarjetas(tarjetasDerTxt);
        animarTarjetas(tarjetasIzqTxt);
        animarTarjetas(tarjetasDerImg);
    }

    window.addEventListener('scroll', mostrarTarjetas);
    mostrarTarjetas();
});