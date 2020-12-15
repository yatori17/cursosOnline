//Tem um this que foi associado aonde ele foi escrito(ex arrow),
// mas o this é descrito na forma que esta função foi chamada

console.log(global === this)
console.log(module ===this)
console.log(module.exports === this)

this.digaOi = function(){
    console.log("oi")
}