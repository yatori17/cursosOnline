//Listar arquivos que es~toa não pasta
const fs = require('fs');
const files = fs.readdirSync(__dirname);

files.forEach(f => console.log(f))