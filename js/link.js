const guardarBtn = document.getElementById('guardarBtn');

//localStorage.clear();
console.log(localStorage);
cargarEnPantalla();
function cargarEnPantalla() {

    const contenedor = document.getElementById('ulContenedorGuardado');
    let mislink = JSON.parse(localStorage.getItem('mislink')) || []; 
    
    contenedor.innerHTML = '';
    
    mislink.forEach(enlace => {
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="${enlace.url}" target="_blank">${enlace.nombre}</a>
        `;
        contenedor.appendChild(li);
    
}); 

}

guardarBtn.addEventListener('click', () => {

    const datonombre = document.getElementById('nombre').value;
    const datourl = document.getElementById('url').value;
    
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
    
    cargarEnPantalla()
    
});
