import { barcelona,    roma,    paris,    londres } from "./ciudades.js";

//Obtener los elememtos del DOM, para todos los <a>

let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un evento click sobre cada enlace

enlaces.forEach(function (enlace){
    enlace.addEventListener('click', function(){
        //remover la clase "active" de todos los enlances
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        })
        //Agregar clase "active" al enlace actual
        this.classList.add('active')
        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
    };
    return contenido[enlace];
}
