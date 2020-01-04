$("result").hide();
$("#hide").click(function(){
    $("p").hide();
});

$(document).ready(function() {
  
  $("#search").click(function() {
    
    var searchBox = $("#search-box").val();
  
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchBox +"&format=json&callback=?";
    console.log(url);
    
    $.ajax({
      type:"GET",
      url:url,
      async: false,
      dataType: "json",
       contentType: "application/json; charset=utf-8",
      success: function(data) {
        
       
        $("#output").html("");
        for (var i = 0; i<data[1].length; i++) {
          $("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
        $("#search-box").val("");
      },
      
      error: function(errorMessage) {
        alert("Error");
      }
    });
    
  });
  
 
    $("#search-box").keypress(function(e){
      if(e.which==13)
         {
          $("#search").click();
              e.preventDefault();
                     $("#search").click();
      
         }
    });
});