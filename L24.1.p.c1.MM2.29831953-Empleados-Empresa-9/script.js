// Definición de la clase Empleado
class Empleado {
    constructor(nombre, sexo, edad) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
}

// Función para calcular el promedio de edad
function calcularPromedioEdad(empleados, sexo) {
    let sumaEdades = 0;
    let cantidadEmpleados = 0;

    for (const empleado of empleados) {
        if (empleado.sexo === sexo) {
            sumaEdades += empleado.edad;
            cantidadEmpleados++;
        }
    }

    if (cantidadEmpleados > 0) {
        return sumaEdades / cantidadEmpleados;
    } else {
        return 0;
    }
}

// Función para encontrar la mayor edad entre las mujeres
function encontrarMayorEdadMujer(empleados) {
    let mayorEdad = 0;

    for (const empleado of empleados) {
        if (empleado.sexo === 'F' && empleado.edad > mayorEdad) {
            mayorEdad = empleado.edad;
        }
    }

    return mayorEdad;
}

// Datos de los empleados
const empleados = [
    { nombre: "Mary", sexo: "F", edad: 43 },
    { nombre: "José", sexo: "M", edad: 40 },
    { nombre: "Carlos", sexo: "M", edad: 30 },
    { nombre: "Pedro", sexo: "M", edad: 50 },
    { nombre: "Mery", sexo: "F", edad: 45 },
    { nombre: "Liz", sexo: "F", edad: 50 },
];

// Cálculo del promedio de edad de los hombres
const promedioEdadHombres = calcularPromedioEdad(empleados, 'M');
console.log(`Promedio de edad de los hombres: ${promedioEdadHombres}`);

// Búsqueda de la mayor edad entre las mujeres
const mayorEdadMujer = encontrarMayorEdadMujer(empleados);
console.log(`Mayor edad entre las mujeres: ${mayorEdadMujer} (la tiene ${empleados.find(e => e.sexo === 'F' && e.edad === mayorEdadMujer).nombre})`);

// Mostrar los resultados en HTML
document.getElementById("promedioHombres").textContent = `Promedio de edad de los hombres: ${promedioEdadHombres}`;
document.getElementById("mayorEdadMujeres").textContent = `Mayor edad entre las mujeres: ${mayorEdadMujer} y la tiene ${empleados.find(e => e.sexo === 'F' && e.edad === mayorEdadMujer).nombre}`;