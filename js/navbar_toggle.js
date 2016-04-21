// Show the navbar when the user scrolls past the page description
(function ($) {
  $(document).ready(function(){
    
    // hide .navbar first
    $(".navbar").hide();
    
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // Only start the fade in once we have reached the top of the page-description
            if ($(this).scrollTop() > $('.page-title').offset().top) {
                $('.navbar').fadeIn(800);
            } else {
                $('.navbar').fadeOut(800);
            }
        });
    });
});
  }(jQuery));

