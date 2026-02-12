const carrito = [
    { nombre: "Camisa", precio: 20000, cantidad: 1 },
    { nombre: "Pantalón", precio: 30000, cantidad: 3 },
    { nombre: "Zapatos", precio: 50000, cantidad: 1 }
];

const procesarFactura = (productos) => {
    let subtotalGeneral = 0;

    const detalle = productos.map(p => {
        const subtotalProducto = p.precio * p.cantidad;
        subtotalGeneral += subtotalProducto;
        return {
            ...p,
            subtotal: subtotalProducto
        };
    });

    return { detalle, subtotalGeneral };
};

const calcularLiquidacion = (bruto) => ({
    totalSinIva: bruto,
    iva: bruto * 0.19,
    totalPagar: bruto * 1.19
});


const { detalle, subtotalGeneral } = procesarFactura(carrito);
const liquidacion = calcularLiquidacion(subtotalGeneral);

// Mostrar resultados
console.table(detalle); // Muestra una tabla melosita en la consola
console.log(`Subtotal: $${liquidacion.totalSinIva}`);
console.log(`IVA (19%): $${liquidacion.iva}`);
console.log(`Total a Pagar: $${liquidacion.totalPagar}`);