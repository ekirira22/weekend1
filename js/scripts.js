$("#age").click(function(event){
  event.preventDefault();
  var age = parseInt($("#age").val());
    if(age===1){
      $("#apology").slideToggle(2000);
    }else {
      $("#part2").slideToggle(2000);
  }
});

$("#sure").click(function(event){
  event.preventDefault();
  var sure = parseInt($("#sure").val());
    if(sure===3){
      $("#vote").slideToggle(2000);
    }else{
      $("#refer").slideToggle(2000);
  }
});

$("#show").click(function () {
  $("#candidates").slideDown(2000);
});
$("#hide").click(function () {
  $("#candidates").slideUp(2000);
});
