const db = require ('./db.js');

console.log(db);

db.execute_sp('guardar_cliente');
db.obtener_datos('SELECT * FROM clientes');
