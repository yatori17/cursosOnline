const http = require('http')
const server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1> Acho que eh melhor usar o Express, não?</h1>')
})

const porta =3456

server.listen(porta, function() {
    console.log(`Escutando a ${porta}`)
})