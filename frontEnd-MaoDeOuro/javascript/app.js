var app = angular.module('starter', ['ui.router', 'starter.controllers']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('langePage', {
      url: '/MaoDeOuro',
      templateUrl: 'langePage.html',
      controller: 'LangePageController'
    })

    .state('header', {
      url: '/header',
      templateUrl: 'header.html',
      controller: 'HeaderController'
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/MaoDeOuro');
  });
