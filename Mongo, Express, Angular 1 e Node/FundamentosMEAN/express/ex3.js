const express = require('express')
const server = express();

//Use, define o inicio da url, sempre que a url tiver este, ele sempre vai passar por esses middleware
server.use('/api', function (req,res,next) {
    //javascript pode suprimir parametros
    console.log('Inicio...')
    next()
    console.log('Fim...')
})

server.use('/api', function(req,res){
    console.log('Resposta...')
    res.send('<h1> Api!!!! </h1>')
})


server.listen(3000, () =>{
    console.log("Executando...")
})