var width = $(document).width();

if(width <= 700){

    
$("#nav").addClass("js");
$("#nav").addClass("js").before('<div style= "top:0; right:0; position:absolute;" id="menu">☰</div>');
$("#menu").click(function(){
  $("#nav").toggle();
});
$(window).resize(function(){
  if(window.innerWidth > 768) {
    $("#nav").removeAttr("style");
  }
})
}

/*
var ht = $("#menu").height();
$("#nav").css({
  'top': ht,
})

}
*/