'use strict';

var redditApp = angular.module('RedditApp.view1', ['ngRoute','ngAnimate']);

redditApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'postsController'
  });
}]);

/*redditApp.controller('PostsCtrl', ['$scope', function ($scope) {
  $scope.posts = [
    {
      'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'
    },
    {
      'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'
    },
    {
      'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.'
    }
  ];
}]);*/

/*redditApp.factory('userService', function(){

  var fac = {};

  fac.users = ['John', 'James', 'Jake'];

  return fac;

});*/

var posts = [{"id": "1","name": "Apple"}, {"id": "2","name": "Orange"}];

redditApp.factory('postsFactory', function() {

  return {

    getPosts: function() {
      return  posts;
    },
    addPost: function() {
      posts.push({"id":"3","name":"Schoggi"});
    }
  };
});

redditApp.controller('postsController', function($rootScope, postsFactory) {
  $rootScope.posts = postsFactory;
});