var app = angular.module('starter',['ngRoute', 'starter.controllers']);

app.config(function($routeProvider, $locationProvider)
{
    // remove o # da url
    $locationProvider.html5Mode({
     enabled: true,
     requireBase: false
    });

   $routeProvider
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'HomeController',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : 'views/sobre.html',
      controller  : 'SobreController',
   })

   // para a rota '/promocao', carregaremos o template promocao.html e o controller 'SobreCtrl'
   .when('/promocao', {
      templateUrl : 'views/promocao.html',
      controller  : 'PromocaoController',
   })

   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'views/contato.html',
      controller  : 'ContatosController',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
