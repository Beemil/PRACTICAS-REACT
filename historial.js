const { execute_sp, obtener_datos } = require ('./db.js');

execute_sp('guardar_historial');
obtener_datos('SELECT * FROM historial');
