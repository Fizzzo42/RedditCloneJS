'use strict';

$( document ).ready(function (){

	mydata.getEntries(function (data) {
        mydata.refreshEntries(data);
    });

});