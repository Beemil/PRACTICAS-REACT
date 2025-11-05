const venta = require ('./venta.json');

//acceder a una propiedad simple
console.log(venta.id);

//acceder a una propiedad que es un objeto
console.log(venta.cliente.nro_documento);

//acceder a una propiedad que es un arreglo
console.log(venta.detalle[1].producto);

let nueva_venta = JSON.stringify(venta)
console.log(nueva_venta);
console.log(typeof nueva_venta);

console.log(JSON.parse(nueva_venta));
console.log(typeof neuva_venta);