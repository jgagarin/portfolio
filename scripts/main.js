$(document).ready(function(){
    $(".toggler").on('click', function(){
        $(".main-nav").slideToggle('slow');
    });
    $(".main-nav").on('click',function(){
        $(this).slideToggle('slow');
    });
});