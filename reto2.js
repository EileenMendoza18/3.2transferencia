let saldoActual = 0;

const deporsitar = (cantidad) => {
    if (cantidad > 0) {
        saldoActual += cantidad;
        return "deposito exitoso, sumo $" + cantidad;
    }
    return "cantidad no valida para depositar";
}

const retitar = (cantidad) => {
    if (cantidad > 0 && cantidad <= saldoActual) {
        saldoActual -= cantidad;
        return "retiro exitoso, saco $" + cantidad;
    } else if (cantidad > saldoActual) {
        return "saldo insuficiente";
    }
    return "cantidad no valida para retirar";
}

const consultarSaldo = () => "su saldo actual es: $" + saldoActual;

function iniciarCajero() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "CAJERO AUTOMATICO\n" +
            "1. consultar saldo\n" +
            "2. depositar dinero\n" +
            "3. retirar dinero\n" +
            "4. salir\n" +
            "elija una opcion (1-4):"
        );

        switch (opcion) {
            case "1":
                alert(consultarSaldo());
                break;
            case "2":                let deposito = parseFloat(prompt("ingrese la cantidad a depositar:"));
                let montoDepositar = parseFloat(prompt("cuanto va a deporsitar"));
                alert(deporsitar(montoDep));
                break;
            case "3":
                let montoRetirar = parseFloat(prompt("cuanto va a retirar"));
                break;
            case "4":
                alert("gracias por usar el sistema");
                continuar = false; //romper el ciclo para salir
                break;
            default:
                alert("opcion no valida, por favor elija entre 1 y 4");    
        }   
    }
}

iniciarCajero();