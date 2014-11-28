'use strict';

/* Controllers */
var redditApp = angular.module('RedditApp', [
    'ngRoute','RedditApp.view1']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
