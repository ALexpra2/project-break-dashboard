// Genero aletoriedad de las imagenes de fondo y las incluyo en CSS

function imagenFondo() {

    let variableAleatoria = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    //console.log(variableAleatoria);

    document.body.style.backgroundImage = `url('img/imgFondo${variableAleatoria}.jpg')`;
} 

//Inertvalo de refresco de la imagen de fondo
setInterval(imagenFondo, 15000);