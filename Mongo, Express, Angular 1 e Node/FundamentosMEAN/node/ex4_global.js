const PI= 3.14
console.log(global.PI) //Sistema de acesso do node bloqueia esse acesso. 
//Coloque só o que realmente é essencial no global, pois pode causar bastante bugs

global.obj= {name: 'Estou no global'}