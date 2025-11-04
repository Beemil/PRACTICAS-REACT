const fs =require('fs');

// fs.writeFile('data.txt', 'Hello, how are you\nFine, and you?', function(err){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log('Archivo creado correctamente');
// })

console.log('before reading');

let content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);

console.log('after reading');