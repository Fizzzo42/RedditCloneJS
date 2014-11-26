'use strict';

/* Controllers */
var redditApp = angular.module('RedditApp', [
    'ngRoute']).config(function($routeProvider) {
        
        var routeConfig = {
            controller: 'MenuCtrl',
            templateUrl: 'teest.html'
        };

        $routeProvider
            .when('/', routeConfig)
            .when('/:status', routeConfig)
            .otherwise({
                redirectTo: '/'
            });

    });





