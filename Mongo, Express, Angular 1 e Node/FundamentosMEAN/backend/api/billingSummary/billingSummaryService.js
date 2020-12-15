const _ = require('lodash');
const BillingCycle = require('../billingCycle/billingCycle')

//Pipeline de agreação = fluxo de agregação
function getSummary(req, res){
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}   
    },{
        $project: {_id: 0, credit: 1, debt: 1}
    }]).exec(function(error, results){
        if(error){
            res.status(500).json({erros: [error]});
        } else{
            res.json(_.defaults(results[0],{credit:0, debt:0})) //A funçao faz um merge, com esse novo objeto, caso não exista anteriormente
        }
    })
}

module.exports= {getSummary}