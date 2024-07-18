// Clase Articulo
class Articulo {
    constructor(codigo, costo, precioVenta) {
      this.codigo = codigo;
      this.costo = costo;
      this.precioVenta = precioVenta;
    }
  
    calcularGanancia() {
      return this.precioVenta - this.costo;
    }
  }
  
  // Clase Tienda
  class Tienda {
    constructor(articulos) {
      this.articulos = articulos;
    }
  
    calcularPromedioPreciosVenta() {
      const totalPreciosVenta = this.articulos.reduce((sum, articulo) => sum + articulo.precioVenta, 0);
      const promedioPrecioVenta = totalPreciosVenta / this.articulos.length;
      return promedioPrecioVenta.toFixed(2);
    }
  
    calcularCantidadArticulosPrecioSuperior(precioSuperior) {
      const cantidadArticulosPrecioSuperior = this.articulos.filter(articulo => articulo.precioVenta > precioSuperior).length;
      return cantidadArticulosPrecioSuperior;
    }
  }
  
  // Crear artículos
  const articulos = [
    new Articulo(1, 10, 15),
    new Articulo(2, 20, 25),
    new Articulo(3, 15, 25),
    new Articulo(4, 25, 35),
    new Articulo(5, 50, 70),
    new Articulo(6, 40, 50),
    new Articulo(7, 80, 100),
    new Articulo(8, 5, 10)
  ];
  
  // Crear tienda
  const tienda = new Tienda(articulos);
  
  // Calcular promedio de precios de venta
  const promedioPreciosVenta = tienda.calcularPromedioPreciosVenta();
  
  // Calcular cantidad de artículos con precio superior a $65
  const cantidadArticulosPrecioSuperior = tienda.calcularCantidadArticulosPrecioSuperior(65);
  
  // Mostrar resultados
  document.getElementById("promedioPreciosVenta").textContent = `Promedio de precios de venta: $${promedioPreciosVenta}`;
  document.getElementById("cantidadArticulosPrecioSuperior").textContent = `Cantidad de artículos con precio superior a $65: ${cantidadArticulosPrecioSuperior}`;