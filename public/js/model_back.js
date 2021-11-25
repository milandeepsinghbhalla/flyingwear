$(window).on('popstate', function(event) {
    if(alert($('.modal').hasClass('in'))){
        event.preventDefault();
    }
   });
