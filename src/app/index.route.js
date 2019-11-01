(function() {
  'use strict';

  angular
    .module('dojo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('escrevendo-no-celular', {
        url: '/escrevendo-no-celular',
        templateUrl: 'app/escrevendo-no-celular/escrevendo-no-celular.html',
        controller: 'EscrevendoNoCelularController',
        controllerAs: 'vm'
      })
      .state('ordenando-texto', {
        url: '/ordenando-texto',
        templateUrl: 'app/ordenando-texto/ordenando-texto.html',
        controller: 'OrdenandoTextoController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
