angular.module('primeiraApp').constant('consts', {
    appName: 'PrimeiraApp',
    version: '1.0',
    owner: 'Leonardo',
    year: '2020',
    site: "",
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: 'primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts){
    $rootScope.consts = consts
}])