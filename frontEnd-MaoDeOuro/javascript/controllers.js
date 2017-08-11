angular.module('starter.controllers', [])

.controller('HomeController', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
})

.controller('SobreController', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
})

.controller('PromocaoController', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
})

.controller('ContatosController', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
})
