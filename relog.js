function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatear las horas, minutos y segundos para que siempre tengan 2 dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Crear una cadena de tiempo en formato HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Actualizar el contenido del elemento con id "clock"
    document.getElementById('clock').textContent = timeString;
}

// Llamar a la función updateClock cada segundo
setInterval(updateClock, 1000);

// Llamar a la función de inmediato para que el reloj no esté en blanco al cargar la página
updateClock();
