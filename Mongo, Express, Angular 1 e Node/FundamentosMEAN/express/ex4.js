const express = require('express')
const server = express();

server.route('/clientes')
    .get((req,res)=> res.send('Lista de Clientes'))
    .post((req,res)=> res.send('NOvo Cliente'))
    .put((req,res)=> res.send('Altera cliente'))
    .delete((req,res)=> res.send('Remove Cliente'))

server.listen(3000, () =>{
    console.log("Executando...")
})