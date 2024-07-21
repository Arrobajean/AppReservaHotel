function calcular() {

    // Declaramos variables.
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let numeroPersonas = parseInt(document.getElementById("numeroPersonas").value);
    let tipoHabitacion = document.getElementById("tipoHabitacion").value;
    let precioTotal;

    // Condición que verifica que esten todos los campos llenos y esten correctos.
    if (nombres === "" || apellidos === "" || isNaN(numeroPersonas) || numeroPersonas <= 0 || tipoHabitacion === "") {
        alert("Por favor, rellene todos los campos y asegúrese de que el número de personas sea válido.");
        return;
    }

    // Condición que verifica que el màximo de personas por reserva es de 12.
    if (numeroPersonas > 12) {
        alert("El número máximo de personas permitido por reserva es 12.");
        return;
    }

    // Cálculo número de habitaciones necesarias
    let numHabitaciones = Math.ceil(numeroPersonas / 2);

    // Cálculo del total
    switch (tipoHabitacion) {
        case "Doble":
            precioTotal = numHabitaciones * 50.00;
            break;
        case "Suite":
            precioTotal = numHabitaciones * 80.00;
            break;
        case "Lujo":
            precioTotal = numHabitaciones * 120.00;
            break;
    }

    // Detalles de la reserva utilizando una tabla en HTML
    let detallesReserva = "<h3>Su Reserva</h3>" +
        "<table class='reserva-tabla'>" +
        "<tr><th>Nombre completo:</th><td>" + nombres + " " + apellidos + "</td></tr>" +
        "<tr><th>Tipo de habitación:</th><td>" + tipoHabitacion + "</td></tr>" +
        "<tr><th>Habitaciones:</th><td>" + numHabitaciones + "</td></tr>" +
        "<tr><th>Total a pagar:</th><td>€" + precioTotal.toFixed(2) + "</td></tr>" +
        "</table>" + "<h2>¡Gracias por su reserva!</h2>";

    // Impresión de la reserva en HTML:
    document.getElementById("detallesReserva").innerHTML = detallesReserva;

} // Fin función calcular

function borrar() {
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("numeroPersonas").value = "";
    document.getElementById("tipoHabitacion").selectedIndex = 0;
    document.getElementById("detallesReserva").innerHTML = "";
} // Fin función borrar.
