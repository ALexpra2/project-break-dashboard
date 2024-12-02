/* API `https://www.weatherapi.com/`
-Probar `https://www.weatherapi.com/api-explorer.aspx` 
-la documentación `https://www.weatherapi.com/docs/`
-  URL`  `http://api.weatherapi.com/v1` añadiremos detrás lo que necesitemos. 
 - Este es un ejemplo de endpoint con la APIKEY y la ciudad. 
 `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

mi endponit http://api.weatherapi.com/v1/current.json?key=3dbee8f312854b24910220444240212 &q=Granada&aqi=no*/


function imagenFondo() {

    let variableAleatoria = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    //console.log(variableAleatoria);

    document.body.style.backgroundImage = `url('img/imgFondo${variableAleatoria}.jpg')`;
}

setInterval(imagenFondo, 15000);
