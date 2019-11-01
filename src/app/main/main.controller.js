(function() {
  'use strict';

  angular
    .module('dojo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.dojos = [
      'Escrevendo no Celular','Ordenando Texto'
    ];

    vm.goToDojo = function(dojo){
      $state.go(dojo);
    };
  }
})();
