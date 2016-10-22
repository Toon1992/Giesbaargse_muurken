
var dir = "fotogalerij";

$.ajax({
  url:dir,
  success:function(data){
    $(data).find("a").attr("href", function(i,val){
      if(val.match(/\.(jpe?g|png|gif)$/)){
        $(".fotoGalerij").append($('<a>').attr('href',val).addClass('lightview').
             append($('<img>').attr('src',val)));
      }
    })
  }
})
