/* `Math.random()` Para generar aleatoriedad
- Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
- Minúsculas: "abcdefghijklmnopqrstuvwxyz"
- Números: "0123456789"
- Símbolos "!@#$%^&*()-_=+"
 */

//Genero los elementos de la contraeña
const M = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const m = "abcdefghijklmnopqrstuvwxyz";
const n = "0123456789";
const s = "!@#$%^&*()-_=+";

//Los introduzco en un array para manejarlos mejor

const mayuscula = M.split('');
const minuscula = m.split('');
const numero = n.split('');
const simbolo = s.split('');

/* console.log(mayuscula);
console.log(minuscula);
console.log(numero);
console.log(simbolo); */


//Funcion para generar la contraseña

function obtenercontraseña() {

    const longitud = parseInt(document.getElementById('longitudContraseña').value);
    console.log(longitud);


    if ((longitud >= 12) && (longitud <= 50)) {

        //Crear aleatoriedad entre las diferentes elemntos de la contraseña y dentro de ellos
        const arrcontraseña = [];
        for (let i = 0; i < longitud; i++) {
            const tipoAleatorio = Math.floor((Math.random() * 4) + 1);
            //console.log(tipoAleatorio);
            if (tipoAleatorio == 1) {
                const caracterAleatorio = Math.floor(Math.random() * 27);
                arrcontraseña.push(mayuscula[caracterAleatorio]);
            }
            else if (tipoAleatorio == 2) {
                const caracterAleatorio = Math.floor(Math.random() * 27);
                arrcontraseña.push(minuscula[caracterAleatorio]);
            }
            else if (tipoAleatorio == 3) {
                const caracterAleatorio = Math.floor(Math.random() * 11);
                arrcontraseña.push(numero[caracterAleatorio]);
            }
            else {
                const caracterAleatorio = Math.floor(Math.random() * 15);
                arrcontraseña.push(simbolo[caracterAleatorio]);
            }
        }

        //Devuelvo la contraseña a un string y la muestro en pantalla
        const contraseña = arrcontraseña.join('');
        const textoContraseña = document.getElementById('contraseña');
        textoContraseña.textContent = contraseña

        console.log(contraseña);
    }


    else {
        alert('Introduce un numero entre 12 y 50');
    }
};

//Capturo el boton y le hago un evento click para inicira el calculo de contraseña

const generarBtn = document.getElementById('generarBtn');
generarBtn.addEventListener('click', obtenercontraseña);






