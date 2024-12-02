function imagenFondo() { 

    let variableAleatoria = Math.floor(Math.random()*(8-1+1)+1);
    console.log(variableAleatoria);
 
    document.body.style.backgroundImage = `url('img/imgFondo${variableAleatoria}.jpg')`;
}

setInterval(imagenFondo, 15000);