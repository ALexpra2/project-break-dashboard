const guardarBtn = document.getElementById('guardarBtn');
const contenedor = document.getElementById('contenedorGuardado');

function cargarEnPantalla() {

    let mislink = localStorage.getItem('mislink');
    contenedor.innerHTML =`
    <ul>
       <li>${}
    </ul>
    `;
    /* let enlaces = JSON.parse(localStorage.getItem('enlaces')) || [];
    
    // Limpiar la lista antes de volver a cargarla
    enlacesList.innerHTML = '';
    
    // Agregar cada enlace como un elemento de lista
    enlaces.forEach(enlace => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${enlace.url}" target="_blank">${enlace.nombre}</a>`;
        enlacesList.appendChild(li);
    
} */



guardarBtn.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const url = document.getElementById('url').value;
    
    //console.log(nombre);
    //console.log(url);
    
    let link = {
    dato1: nombre,  
    dato2: url  
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

});
