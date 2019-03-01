$(document).ready(function() {
  $("#search").on("click", function(){
    //Get search term and create api url
    var searchTerm = $("#searchItem").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
    
    //Get data with getJSON
    $.getJSON(api, function(results) {
      //clear results
      $("#results").html('');
      //iterate through data and append results
      for(var i = 0; i < results[1].length; i++) {
        $("#results").append("<li class=well style=background-color:#DDD;margin-bottom:1%><h2><a href=" + results[3][i] + " target=\"_blank\">" + results[1][i] + "</a></h2><p>" + results[2][i] + "</p></li>");
      }
    });
  });
  //Random article generated
  $("#random").on("click", function(){
    var rndm = "https://en.wikipedia.org/wiki/Special:Random";
    window.open(rndm, "_blank");
  });
  
  //On Enter Press
  $("#searchItem").keypress(function(key){
    if(key.which == 13) $("#search").click();
  });
});