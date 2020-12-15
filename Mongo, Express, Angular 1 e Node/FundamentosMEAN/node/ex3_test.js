const s1 = require('./ex3_singleton')
const s2 = require('./ex3_singleton')
//Ambas as variáveis estão apontando pra mesma instância do módulo e semper que você queria uma nova instância, encapsule

s1.exibirProximo()
s2.exibirProximo()
s1.exibirProximo()
s2.exibirProximo()
