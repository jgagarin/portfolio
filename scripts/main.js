$(document).ready(function(){
    
    //disappear toggle nav
    $(".toggler").on('click', function(){
        $(".main-nav").slideToggle('slow');
    });
    $(".main-nav").on('click',function(){
        $(this).slideToggle('slow');
    });
    
    //smooth scroller
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  }); //end smooth scroll
    
});