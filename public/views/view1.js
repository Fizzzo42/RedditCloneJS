'use strict';

angular.module('RedditApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/links', {
    templateUrl: '/views/view1.html',
    controller: 'dataController'
  });
}]);