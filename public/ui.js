'use strict';

(function ($) {

    $( document ).ready(function (){

        var socket = mydata.getSocket();

        var redditApp = angular.module('RedditApp');

        socket.on('connect', function (data) {
            console.log("HAHA");
            ohSnap('We are connected', 'green');
        });
        socket.on('disconnect', function (data) {
            console.log("BYE");
            ohSnap('Connection lost!', 'red');
        });

        socket.on('message', function (data) {
            switch(data.action){
                case 'AddLink':
                    ohSnap('New Link loaded!', 'blue');
                    myview.refreshView();
                    break;
                case 'Rated':
                    myview.refreshView();
                    break;
                case 'AddComment':
                    ohSnap('New Comment loaded!', 'blue');
                    myview.refreshView();
                    break;
            }

            console.log("Message received: " + data.action);

        });
    });


})(jQuery);

