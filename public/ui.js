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
                    refresh();
                break;
                    case 'Rated':
                    refresh();
                break;
            }

            console.log("Message received: " + data.action);

           // alert(window.location.hash);

            

        });

        var refresh = function(){
            if(window.location.hash.indexOf("/links") !== -1)
                mydata.getEntries(function (data) {
                    mydata.refreshEntries(data);
                });
            if(window.location.hash.indexOf("/post") !== -1){
                var pathArray = window.location.hash.split( '/' );
                var id = pathArray[pathArray.length - 1];

                mydata.getEntryById(id, function (data) {
                    mydata.refreshEntry(data);
                });
            }
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

