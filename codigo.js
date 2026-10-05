const claveApi = '126a3858b4164015bc434639260510'; // <-- Reemplaza esto con tu API Key de WeatherAPI
const idioma = 'es';

const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }

    const apiClimaActual = `https://weatherapi.com{ciudad}&lang=${idioma}&key=${claveApi}`;

    try {
        const response = await fetch(apiClimaActual);
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
        alert("No se pudo encontrar la ciudad. Intenta de nuevo.");
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = "https:" + data.current.condition.icon;
    document.querySelector('.clima-text').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}