'use strict';

$( document ).ready(function (){

	var pathArray = window.location.hash.split( '/' );
	var id = pathArray[pathArray.length - 1];

	myview.refreshView();

});

