angular.module('primeiraApp').component('contentHeader', {
    bindings: {
        name: '@',
        small: '@',
    },
    //ctrl eh padrão!
    template:
     ` <section class ="content-header">
            <h1>{{ $ctrl.name}} <small> {{$ctrl.small}} 
            </small></h1>
        </section>
    `
   

})
