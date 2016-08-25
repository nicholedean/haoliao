$(function(){
	var bumpIt = function() {
      $('body').css('margin-bottom', $('.footer').outerHeight());
    },
    didResize = false;

    bumpIt();

    $(window).resize(function() {
      didResize = true;
    });

    setInterval(function() {
      if(didResize) {
        didResize = false;
        bumpIt();
      }
    }, 300);
});