const personas = [
    { nombre: "Mary", sexo: "F", ingreso: 150 },
    { nombre: "José", sexo: "M", ingreso: 135 },
    { nombre: "Carlos", sexo: "M", ingreso: 160 },
    { nombre: "Pedro", sexo: "M", ingreso: 75 },
    { nombre: "Rosa", sexo: "F", ingreso: 120 },
    { nombre: "Carmen", sexo: "F", ingreso: 120 },
];

// Calcular el promedio de ingreso de las mujeres
const ingresosMujeres = personas.filter(persona => persona.sexo === "F").map(persona => persona.ingreso);
const promedioMujeres = ingresosMujeres.reduce((acumulador, ingreso) => acumulador + ingreso, 0) / ingresosMujeres.length;

// Calcular el nombre de la persona con mayor ingreso
const mayorIngreso = personas.reduce((mayor, persona) => mayor.ingreso > persona.ingreso ? mayor : persona, { nombre: "", sexo: "", ingreso: -Infinity });

// Mostrar los resultados
document.getElementById("promedioMujeres").textContent = `Promedio de ingreso de las mujeres: ${promedioMujeres}$`;
document.getElementById("mayorIngreso").textContent = `Nombre de la persona con mayor ingreso: ${mayorIngreso.nombre} con un ingreso de ${mayorIngreso.ingreso}$`;
