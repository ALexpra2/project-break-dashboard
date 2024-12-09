const guardarBtn = document.getElementById('guardarBtn');

//localStorage.clear();
console.log(localStorage);

cargarEnPantalla();

function cargarEnPantalla() {

    const contenedor = document.getElementById('ulContenedorGuardado');
    contenedor.innerHTML = '';
    
    let mislink = localStorage.getItem('mislink');

    if (mislink) {
        mislink = JSON.parse(mislink);
    }
    else {
        mislink = [];
    }

    mislink.forEach((link,i) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="${link.url}" target="_blank">${link.nombre}</a>
        <button class="eliminarBtn" data-index="${i}">X</button>
        `;
        contenedor.appendChild(li);

    });
    
    const eliminarBtn = document.querySelectorAll('.eliminarBtn')
    eliminarBtn.forEach((button) => {
        button.addEventListener('click', eliminarLink);
    });
}

function eliminarLink(event) {
    const index = event.target.dataset.index; 
    let mislink = localStorage.getItem('mislink');

    if (mislink) {
        mislink = JSON.parse(mislink);
    }
    else {
        mislink = [];
    }
    
    mislink.splice(index, 1); 
    localStorage.setItem('mislink', JSON.stringify(mislink)); // Actualiza el localStorage

    cargarEnPantalla();                      // Vuelve a cargar la lista
}


guardarBtn.addEventListener('click', () => {

    const datonombre = document.getElementById('nombre').value;
    const datourl = document.getElementById('url').value;

    if (!datonombre || !datourl) {
        alert('Por favor, completa los campos del formulario.');
    }
    //console.log(nombre);
    //console.log(url);

    let link = {
        nombre: datonombre,
        url: datourl
    };

    let mislink = localStorage.getItem('mislink');

    if (mislink) {
        mislink = JSON.parse(mislink);
    }
    else {
        mislink = [];
    }

    mislink.push(link);
    localStorage.setItem('mislink', JSON.stringify(mislink));

    console.log(localStorage.getItem('mislink'));

    document.getElementById('nombre').value = '';
    document.getElementById('url').value = '';

    cargarEnPantalla()
});
