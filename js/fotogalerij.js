var imagesPath =["img/CarRender.jpg",
                 "img/CarRender.jpg",
                 "img/CarRender.jpg"]

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

/*var htmlString = "";

$.each(imagesPath, function(i, item){
  htmlString += "<a href=\"" + item + "\"class=\"lightview\"> " +
          "<img src=\"" + item + "\" alt=\"test\"/> </a>"
});

$("#fotoGalerij").append(htmlString);*/

/*$(document).ready(function (){
  var fotogalerij =  $(".fotoGalerij");
$.each(imagesPath, function(i,item){
   fotogalerij.append($('<a>').attr('href',item).addClass('lightview').
        append($('<img>').attr('src',item)));
  });
});*/


/*<$("#detail").append($("<ul>")
                    .append($("<li>").addClass("detail detailHeader col-md-12 col-sm-12 col-xs-12")
                            .append($("<div>").addClass("col-md-4 col-sm-4 col-xs-4").append($("<h1>")*/
