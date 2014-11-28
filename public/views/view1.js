'use strict';

angular.module('RedditApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/views/view1.html',
    controller: 'dataController'
  });
}]);