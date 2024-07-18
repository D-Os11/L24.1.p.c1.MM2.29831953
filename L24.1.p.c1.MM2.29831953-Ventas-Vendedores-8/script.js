const vendedores = [
    { nombre: "Mary", tipoVendedor: 1, montoVenta: 150 },
    { nombre: "José", tipoVendedor: 1, montoVenta: 135 },
    { nombre: "Carlos", tipoVendedor: 2, montoVenta: 160 },
    { nombre: "Pedro", tipoVendedor: 2, montoVenta: 75 },
];

// Calcular el total de ventas de los mayoristas
const totalMayoristas = vendedores.filter(vendedor => vendedor.tipoVendedor === 1).reduce((acumulador, venta) => acumulador + venta.montoVenta, 0);

// Calcular la mayor venta de los mayoristas
const mayorVentaMayorista = vendedores.filter(vendedor => vendedor.tipoVendedor === 1).reduce((mayor, venta) => mayor.montoVenta > venta.montoVenta ? mayor : venta, { nombre: "", tipoVendedor: 1, montoVenta: -Infinity });

// Mostrar los resultados
document.getElementById("totalMayoristas").textContent = `Monto total de las ventas de los vendedores tipo mayorista: ${totalMayoristas}$`;
document.getElementById("mayorVentaMayorista").textContent = `Monto mayor venta realizada por los vendedores tipo mayorista: ${mayorVentaMayorista.nombre}, ${mayorVentaMayorista.montoVenta}$`;
