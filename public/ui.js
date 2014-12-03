'use strict';

(function ($) {

    $( document ).ready(function (){

        //var socket = io.connect('http://localhost:4730/');
        var socket = mydata.getSocket();

        var redditApp = angular.module('RedditApp');

        socket.on('connect', function (data) {
            console.log("HAHA");
            ohSnap('We are connected', 'green');
            /*mydata.getEntries(function (data) {
                mydata.refreshEntries(data);
            });*/
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
                    mydata.refreshView();
                    break;
                case 'Rated':
                    mydata.refreshView();
                break;
                case 'AddComment':
                    ohSnap('New Comment loaded!', 'blue');
                    mydata.refreshView();
                    break;
            }

            console.log("Message received: " + data.action);

        });

        //if(sessionStorage.redditName && sessionStorage.redditPassword)
            //alert("todo, login");

        //function rateUp()
        //window.data.postEntry("Neu","www.blaaa.com");
        
        /*socket.on('message', function (data) {
            alert("We got a message");
        })*/

    });


})(jQuery);

