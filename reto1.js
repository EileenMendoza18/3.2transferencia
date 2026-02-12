// recibe las 3 notas y devuelve el resultado matematico
function calcularPromedio (n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma / 3;
}

function determinarResultado (promedio) {
    if (promedio >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function registrarEstudiante (nombre, n1, n2, n3) {
    let promedio = calcularPromedio(n1, n2, n3);
    
    let resultado = determinarResultado(promedio);

    console.log("Estudiante: " + nombre);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Resultado: " + resultado);
}

registrarEstudiante("santiago carrillo", 4.0, 3.5, 2.0);