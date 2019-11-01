(function() {
    'use strict';
  
    angular
      .module('dojo')
      .controller('OrdenandoTextoController', OrdenandoTextoController);
     
    /** @ngInject */
    function OrdenandoTextoController() {
      var vm = this;
      
      vm.texto = 'SEMPRE ORDENO AS MENSAGENS QUANDO ESTOU ESTUDANDO';
      vm.resultadoCorreto = 'AS  ESTUDANDO ESTOU MENSAGENS QUANDO ORDENO SEMPRE';
      vm.resultado = 'seguindo os passos o resultado aparecerá aqui.';

      

    }
  })();



  