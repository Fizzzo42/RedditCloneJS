'use strict';

(function ($) {

    var socket = io.connect('http://localhost:4730/');

    var redditApp = angular.module('RedditApp');

    socket.on('connect', function (data) {
        console.log("HAHA");
        mydata.getEntries(function (data) {
            refreshEntries(data);
        });
        //socket.emit('addPost');
    });
    socket.on('disconnect', function (data) {
        console.log("BYE");
    });

    socket.on('message', function (data) {
        console.log("message got");

        mydata.getEntries(function (data) {
            refreshEntries(data);
        });

        // document.write(data);
        //document.body.innerHTML = data;
    });

    //function rateUp()
    //window.data.postEntry("Neu","www.blaaa.com");
    
    /*socket.on('message', function (data) {
        alert("We got a message");
    })*/

    var refreshEntries = function(data){
        var $scope = angular.element($('#content')).scope();
        //var $scope = angular.element('$0').scope();
        $scope.$apply(function() {
            $scope.entries = data;
        });
    };


})(jQuery);

