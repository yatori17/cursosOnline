const mongoose= require('mongoose')
//Responsável pelo mapeamento dos objetos entre bd e back

module.exports= mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required= "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min ="O {VALUE} informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max ="O {VALUE} informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.Number.enum ="{VALUE} informado é inálido para o atributo '{PATH}' "