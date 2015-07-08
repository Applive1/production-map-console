
import $ from 'jquery';

$(function() {
    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        contentType: 'application/json',
        dataType: 'json',
        processData: false,

        beforeSend: function(xhr, options){
            if(options.contentType == 'application/json' && typeof options.data !== 'string' ) {
                options.data = JSON.stringify(options.data);
            }
        }
    });
});