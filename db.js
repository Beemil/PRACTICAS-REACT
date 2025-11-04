function ejecutar_sp(nombre_procedimiento){
    console.log('Procedimiento', nombre_procedimiento, 'ejecutado correctamente.'); 
}

function obtener_datos(query){
    console.log('Datos del query', query);
}

module.exports.execute_sp = ejecutar_sp;
module.exports.obtener_datos = obtener_datos;

console.log(module.exports);