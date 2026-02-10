
const nombre = prompt("¡Bienvenido/a! Por favor, ingrese su nombre:");
alert("¡Hola, " + nombre + "! ¡Bienvenido/a! 👋");

let historial = [];

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}  

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

function mostrarHistorial() {
    if (historial.length === 0) { 
        alert("No hay historial. Por favor, realice alguna operación primero.");
        console.log("No hay historial. Por favor, realice alguna operación primero.");
        return;
    }
    console.log("\n Historial completo de operaciones:");
    historial.forEach((operacion, index) => {
        console.log((index + 1) + ") " + operacion);
    });

}

function pedirNumero(mensaje) {
    let numero = parseFloat(prompt(mensaje));
    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
        return null;
    }
    return numero;
}

function menu() {
    const opcionesMenu = [
        "1. Sumar",
        "2. Restar",
        "3. Multiplicar",
        "4. Dividir",
        "5. Ver Historial",
        "6. Salir"
    ];

    let opcion;
    while (opcion !== "6") {
        let textoMenu = "Seleccione una operación:\n";
        for (let i = 0; i < opcionesMenu.length; i++) {
            textoMenu += opcionesMenu[i] + "\n";
        }
        opcion = prompt(textoMenu);

        const opcionNum = parseInt(opcion);

        if (isNaN(opcionNum) || opcionNum < 1 || opcionNum > 6) {
            console.log("\n Opción inválida.");
            alert("Opción inválida.");
            continue;
        }

        if (opcion === "6") {
            alert("¡" + nombre + "! ¡Hasta luego! 👋");
            break;
        }
        if (opcion === "5") {
            mostrarHistorial();
            continue;
        }
        let num1 = pedirNumero("Ingrese el primer número:");
        if (num1 === null) {
            continue;
        }

        let num2 = pedirNumero("Ingrese el segundo número:");
        if (num2 === null) {
            continue;
        }

        let resultado;
        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                historial.push(num1 + " + " + num2 + " = " + resultado);
                console.log("\n Resultado de la suma: " + resultado);
                break;
            case "2":
                resultado = restar(num1, num2);
                historial.push(num1 + " - " + num2 + " = " + resultado); 
                console.log("\n Resultado de la resta: " + resultado);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                historial.push(num1 + " * " + num2 + " = " + resultado); 
                console.log("\n Resultado de la multiplicación: " + resultado);
                break;
            case "4":
                resultado = dividir(num1, num2);
                if (resultado !== null) {
                    historial.push(num1 + " / " + num2 + " = " + resultado); 
                    console.log("\n Resultado de la división: " + resultado);
                }
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 6.");
        }
    }
}

menu();


