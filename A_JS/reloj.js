function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();

    // Añade ceros delante de los números menores a 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var horaActual = horas + ":" + minutos + ":" + segundos;

    // Actualiza el contenido del elemento con el id "reloj"
    document.getElementById("reloj").innerHTML = horaActual;
}

// Actualiza el reloj cada segundo
setInterval(actualizarReloj, 1000);