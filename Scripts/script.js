

$(document).ready(function(){




$('.parallax-window').parallax({imageSrc: 'images/parallaxbg.jpg'}); 


$(function(){
  var navbar = $('.header');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 40){
      navbar.removeClass('navbar-scroll');
    } else {
      navbar.addClass('navbar-scroll');
    }
  });
});
$(function(){
  var navbar = $('#logo');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 40){
      navbar.removeClass('smallLogo');
    } else {
      navbar.addClass('smallLogo');
    }
  });
});
$(function(){
  var icon = $('.fas');
  
  $(".navbar-toggler").click(function(){
   icon.toggleClass('fa-times');
  });
});



}); 



