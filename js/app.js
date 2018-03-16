//  set scroll to top on refresh/load
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

// fade animation when loading site
$(document).ready(function() {
  $('#home').hide().fadeIn(1500);
  $('header').hide().fadeIn(2500);
  $('footer').hide().fadeIn(1500);
});

// fade #home while scrolling
$(window).scroll(function() {
  $("#home").css("opacity", 1 - $(window).scrollTop() / 350);
  if ($(window).scrollTop() > 200) {
    $("header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("header").removeClass("active");
  }
});

// scroll to work
$(".smoothscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#work").offset().top
  }, 1400);
  return false;
});
