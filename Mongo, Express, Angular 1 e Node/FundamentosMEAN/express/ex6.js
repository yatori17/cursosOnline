const express1 = require('express')
const express2 = require('express')

console.log(express1 === express2) //true
// QUando cria instancias do express está criando instancias difernets
const server1 = express1()
const server2 = express1()

console.log(server1 === server2) //false

const router1 = express1.Router()
const router2 = express1.Router()

console.log(router1 === router2) //false