var imagesPath =["img/CarRender.jpg",
                 "img/CarRender.jpg",
                 "img/CarRender.jpg"]

/*var htmlString = "";

$.each(imagesPath, function(i, item){
  htmlString += "<a href=\"" + item + "\"class=\"lightview\"> " +
          "<img src=\"" + item + "\" alt=\"test\"/> </a>"
});

$("#fotoGalerij").append(htmlString);*/

$(document).ready(function (){
  $(".fotoGalerij").each(imagesPath, function(i,item){
    $(this).append('<a href="' + item + '" class="lightview">').
    append('<img src="' + item + '"alt="test"/>').
    append('</a>');
  });
});
