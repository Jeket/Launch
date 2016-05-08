angular.module('mq-dev', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/state1");
  $stateProvider.state('state1', {
      url: "/",
      templateUrl: "views/index.html"
    }).state('state2', {
      url: "/solutions",
      templateUrl: "views/solutions.html"
    })
});
