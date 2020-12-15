const port = 3003;

const bodyParser = require('body-parser');
const express= require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true})) //Body parser responsavel pela informação vinda de um formulário, e com o 'extended: true', ela consegue fazer mais cosias do que o de costue?
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`Backend is running on port ${port}`)
})

//Se não chegou no ultimo método, tem que chamar o 'next'

module.exports= server