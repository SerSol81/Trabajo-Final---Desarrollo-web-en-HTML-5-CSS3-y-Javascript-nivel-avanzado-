

/* --- Barra de Navegacion --- */

window.addEventListener("scroll", function() {
    const nav = document.querySelector(".barra-nav");

    if (window.scrollY > 50) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll");
    }
});

    /* --- video --- */

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

    /* --- Animacion de tarjetas pagina historia --- */

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

 /* --- Puzzle pagina juguemos --- */

let contadorColocados = 0;

function iniciar() {
    let imagenes = document.querySelectorAll('.img-rc');
    let caja1 = document.getElementById('caja1');
    let caja2 = document.getElementById('caja2');
    let caja3 = document.getElementById('caja3');


    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].draggable = true;
        imagenes[i].addEventListener('dragstart', empezarArrastre, false);
    }

    caja1.addEventListener('dragover', permitirSoltar, false);
    caja1.addEventListener('drop', soltarImagen, false);

    caja2.addEventListener('dragover', permitirSoltar, false);
    caja2.addEventListener('drop', soltarImagen, false);

    caja3.addEventListener('dragover', permitirSoltar, false);
    caja3.addEventListener('drop', soltarImagen, false);
}

function empezarArrastre(e) {
    let idFoto = e.target.id;
    e.dataTransfer.setData('Text', idFoto);
}

function permitirSoltar(e) {
    e.preventDefault();
}

function soltarImagen(e) {
    e.preventDefault();

    let idFoto = e.dataTransfer.getData('Text');
    let imagenOriginal = document.getElementById(idFoto);

    imagenOriginal.style.display = 'none';

    let contenedor;
    if (e.target.tagName === "DIV") {
        contenedor = e.target;
    } else {
        contenedor = e.target.parentNode;
    }

    let nuevaImagen = document.createElement('img');
    
    nuevaImagen.src = imagenOriginal.src;
    nuevaImagen.id = imagenOriginal.id;
    nuevaImagen.style.width = "100%";
    nuevaImagen.style.height = "100%";
    nuevaImagen.style.objectFit = "cover";
    nuevaImagen.style.transform = "none";
    nuevaImagen.style.paddingLeft = "0px"
    nuevaImagen.style.paddingRight = "0px"
    caja1.style.border = "0px"
    caja2.style.border = "0px"
    caja3.style.border = "0px"
    
    contenedor.innerHTML = "";
    contenedor.appendChild(nuevaImagen);

    contadorColocados++;

    if (contadorColocados === 3) {
        let img1 = document.querySelector("#caja1>img").id;
        let img2 = document.querySelector("#caja2>img").id;
        let img3 = document.querySelector("#caja3>img").id;

        let mensaje = document.querySelector(".mensaje");
        

        if (img1 === "img2" && img2 === "img1" && img3 === "img3") {
            let contenedorCajas = document.querySelector(".cajas");
            contenedorCajas.style.gap = "0";
            mensaje.innerHTML = "Felicitaciones!! Puzzle correctamente resuelto";
            mensaje.style.color = "#FFFFFF";
            mensaje.style.fontSize = "66px";
            mensaje.style.fontWeight = "800";
            mensaje.style.textShadow = "2px 2px #808080, 6px 6px black";
            mensaje.style.position = "relative";
            mensaje.style.textAlign = "center";
            mensaje.style.transition = "all 1.5s ease";
            mensaje.style.top = "20px";
        } else {
            mensaje.innerHTML = "Lo sentimos, Puzzle no resuelto. Prueba otra vez";
            mensaje.style.color = "#FFFFFF";
            mensaje.style.fontSize = "66px";
            mensaje.style.fontWeight = "800";
            mensaje.style.textShadow = "2px 2px #808080, 6px 6px black";
            mensaje.style.position = "relative";
            mensaje.style.textAlign = "center";
            mensaje.style.transition = "all 1.5s ease";
            mensaje.style.top = "20px";
        }
    }
}

window.addEventListener('load', iniciar);


/* --- Boton Reiniciar pagina juguemos --- */

function reiniciar() {
    window.location.reload();
}