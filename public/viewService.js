(function ($) {

	$.fn.viewService = {
		refreshView: function(){
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
        }
	};

})(jQuery);