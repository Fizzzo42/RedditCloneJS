'use strict';

(function ($) {

    $( document ).ready(function (){

        var socket = io.connect('http://localhost:4730/');

        var redditApp = angular.module('RedditApp');

        socket.on('connect', function (data) {
            console.log("HAHA");
            ohSnap('We are connected', 'green');
            mydata.getEntries(function (data) {
                refreshEntries(data);
            });
            //socket.emit('addPost');
        });
        socket.on('disconnect', function (data) {
            console.log("BYE");
            ohSnap('Connection lost!', 'red');
        });

        socket.on('message', function (data) {
            switch(data.action){
                case 'AddLink':
                ohSnap('New Link loaded!', 'blue');
                break;
            }

            console.log("Message received: " + data.action);

            mydata.getEntries(function (data) {
                refreshEntries(data);
            });

        });

        var refreshEntries = function(data){
            var $scope = angular.element($('#content')).scope();
            //var $scope = angular.element('$0').scope();
            $scope.$apply(function() {
                $scope.entries = data;
            });
        };

        //if(sessionStorage.redditName && sessionStorage.redditPassword)
            //alert("todo, login");

        //function rateUp()
        //window.data.postEntry("Neu","www.blaaa.com");
        
        /*socket.on('message', function (data) {
            alert("We got a message");
        })*/

    });


})(jQuery);

