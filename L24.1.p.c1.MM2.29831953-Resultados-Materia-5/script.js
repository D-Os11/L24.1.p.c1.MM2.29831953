class Estudiante {
    constructor(cedula, notaFinal) {
        this.cedula = cedula;
        this.notaFinal = notaFinal;
    }

    isAprobado() {
        return this.notaFinal >= 48;
    }
}

class Estadisticas {
    constructor(estudiantes) {
        this.estudiantes = estudiantes;
    }

    calcularPorcentajeAprobados() {
        const totalEstudiantes = this.estudiantes.length;
        const estudiantesAprobados = this.estudiantes.filter(estudiante => estudiante.isAprobado());
        const porcentajeAprobados = (estudiantesAprobados.length / totalEstudiantes) * 100;
        return porcentajeAprobados.toFixed(2);
    }

    obtenerCedulaMejorEstudiante() {
        const mejoresEstudiantes = this.estudiantes.filter(estudiante => estudiante.isAprobado());
        mejoresEstudiantes.sort((a, b) => b.notaFinal - a.notaFinal);
        return mejoresEstudiantes[0].cedula;
    }
}

const estudiantes = [
    new Estudiante(888, 60),
    new Estudiante(777, 50),
    new Estudiante(999, 40),
    new Estudiante(333, 90),
    new Estudiante(111, 30),
    new Estudiante(666, 90),
    new Estudiante(444, 48),
    new Estudiante(222, 60)
];

const estadisticas = new Estadisticas(estudiantes);

const porcentajeAprobados = estadisticas.calcularPorcentajeAprobados();
const cedulaMejorEstudiante = estadisticas.obtenerCedulaMejorEstudiante();

document.getElementById("porcentajeAprobados").textContent = `Porcentaje de aprobados: ${porcentajeAprobados}%`;
document.getElementById("cedulaMejorEstudiante").textContent = `Cédula de uno de los mejores estudiantes: ${cedulaMejorEstudiante}`;
