function generarReloj() {

    const date = new Date();
    //console.log(date);
    
    //Generar hora

    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds();

    //console.log(hora, minuto, segundo);

    if ((hora >= 0) && (hora <= 9)) {
        horaFinal = `0${hora}`;
    }
    else {
        horaFinal = hora
    }

    if ((minuto) >= 0 && (minuto <= 9)) {
        minutoFinal = `0${minuto}`;
    }
    else {
        minutoFinal = minuto
    }

    if ((segundo >= 0) && (segundo <= 9)) {
        segundoFinal = `0${segundo}`;
    }
    else {
        segundoFinal = segundo
    }

    const horaReloj = `${horaFinal}:${minutoFinal}:${segundoFinal}`
    //console.log(horaReloj)

    //---------------------------------------------------------------------------

    //Generar fecha

    const dia = date.getDate()
    const mes = date.getMonth()
    const año = date.getFullYear();

    //console.log(dia, mes, año);

    if ((dia >= 0 && dia <= 9)) {
        diaFinal = `0${dia}`;
    }
    else {
        diaFinal = dia
    }

    if ((mes >= 0 && mes <= 9)) {
        mesFinal = `0${mes}`;
    }
    else {
        mesFinal = mes
    }

    const fechaReloj = `${diaFinal}/${mesFinal}/${año}`
    //console.log(fechaReloj);

    //----------------------------------------------------------------------------
    
    //Condicionales para generar el mensaje segun las horas

    if ((hora >= 0) && (hora <= 6)) {
        mensaje = 'Es hora de descansar. Apaga y sigue mañana';
    }
    else if ((hora >= 7) && (hora <= 11)) {
        mensaje = 'Buenos días, desayuna fuerte y a darle al código';
    }
    else if ((hora >= 12) && (hora <= 13)) {
        mensaje = 'Echa un rato más pero no olvides comer';
    }
    else if ((hora >= 14) && (hora <= 15)) {
        mensaje = 'Espero que hayas comido';
    }
    else if ((hora >= 16) && (hora <= 17)) {
        mensaje = 'Buenas tardes, el último empujón';
    }
    else if ((hora >= 18) && (hora <= 21)) {
        mensaje = 'Esto ya son horas extras, ... piensa en parar pronto';
    }
    else {
        mensaje = 'Buenas noches, es hora de pensar en parar y descansar';
    }
    //console.log(mensaje);
    
    //-----------------------------------------------------------------------------
    
    //Introducir todo en el HTML

    const reloj = document.getElementById('clockContainer');
    reloj.innerHTML = `
    <p class='hora'>${horaReloj}</p>
    <p class='fecha'>${fechaReloj}</p>
    <p class=mensaje> ${mensaje}<p>
    `;

}

//Funcion para actualizar cada segundo

setInterval(generarReloj, 1000);