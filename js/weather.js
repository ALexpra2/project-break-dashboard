/* API `https://www.weatherapi.com/`
-Probar `https://www.weatherapi.com/api-explorer.aspx` 
-la documentación `https://www.weatherapi.com/docs/`
-  URL`  `http://api.weatherapi.com/v1` añadiremos detrás lo que necesitemos. 
 - Este es un ejemplo de endpoint con la APIKEY y la ciudad. 
 `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

mi endponit http://api.weatherapi.com/v1/current.json?key=3dbee8f312854b24910220444240212 &q=Granada&aqi=no*/


//Traigo los datos en base dias

const apiUrl1 = 'https://api.weatherapi.com/v1/current.json?key=3dbee8f312854b24910220444240212&q=Granada&aqi=no';

async function obtenerDatosCiudad() {
    try {
      const response = await fetch(apiUrl1);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      const contenedor=document.getElementById('datosCiudad');
      contenedor.innerHTML=`
      <div class='ciudad'>
         <p>${data.location.name} / ${data.location.country}</p>
         <p>${data.current.condition.text}</p>
      </div> 
      <div class='datos'>
        <div class='imagenTemperatura'>
            <img class=ìmagenTiempo src='${data.current.condition.icon}'/>
            <p>${data.current.temp_c} ° C<p>      
                  
        </div>
        <div class='precHumVi'>
            <p>Precipitaciones: ${data.current.temp_c}<p>
            <p>Humedad: ${data.current.humidity} %<p>      
            <p>Viento: ${data.current.wind_kph} kph<p>

        </div>
      </div>`;

      console.log(data);

    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  obtenerDatosCiudad()
  
  //Traigo los datos en base horas

  const apiUrl2 = 'https://api.weatherapi.com/v1/forecast.json?key=3dbee8f312854b24910220444240212&q=Granada&days=1&aqi=no&alerts=no'
  
  async function obtenerDatosHoras() {
    try {
      const response = await fetch(apiUrl2);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      
      //Filtro los datos para manejarlos mejor
      
      const datos = data.forecast.forecastday[0].hour
      const ulDatos = document.getElementById('datosHoras');
      
      //Bucle para meter los datos en cada uno de los li

      datos.forEach(horas => {
      console.log(horas);
      
      //El dato horas trae tambien la fecha por lo que me quedo con lo que me interesa
      
      const horasSinFecha = horas.time[11]+horas.time[12]+horas.time[13]+horas.time[14]+horas.time[15];
      //console.log(horasSinFecha);
      
      const informacionHoras = document.createElement('li');
      informacionHoras.innerHTML =`
      <p>${horasSinFecha}<p>
      <img src= '${horas.condition.icon}'/>
      <p>${horas.temp_c} °C</p>
      `;
    
      ulDatos.appendChild(informacionHoras);
      });
    
    } 
    catch (error) {
      console.error('Error:', error);
    }
  }

  obtenerDatosHoras()

  