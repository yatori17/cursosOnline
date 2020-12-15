//jogar na linha de comando node nome_arrquivo --producao params'

function temParam(param){
    return process.argv.indexOf(param) !== -1
}
if(temParam('--producao')){
    console.log('Atençao total')
} else console.log('Tranks')