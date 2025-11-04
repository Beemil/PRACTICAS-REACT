const db = require ('./db.js');

console.log(db);

db.execute_sp('guardar_historial');
