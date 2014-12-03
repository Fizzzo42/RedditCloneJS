'use strict';

/* Controllers */
var redditApp = angular.module('RedditApp', [
    'ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/links', {
        templateUrl: 'views/view1.html',
        controller: 'dataController'
    }).
      when('/post/:postId', {
        templateUrl: 'views/view2.html',
        controller: ''
      }).
      otherwise({
        redirectTo: '/links'
      });
}]);
