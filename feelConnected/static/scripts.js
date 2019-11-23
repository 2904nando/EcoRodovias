$(document).ready(function(){

  function resize_map() {
    var viewport = $(window).width();
    if(viewport <= 759) {
      $('#map').removeClass("embed-responsive-16by9");
      $("#map").css('height', '60vh')
    } else {
      $("#map").css('height', '')
      $('#map').addClass("embed-responsive-16by9");
    }
  }

  resize_map();

  $(window).resize(function() {
    resize_map();
  })
})
