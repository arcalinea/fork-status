$(document).ready(function(){

  var status = $(".status").text();
  if (status === "No"){
    $('.status').addClass('no');
  } else if (status === "Maybe"){
    $('.status').addClass('maybe');
  } else {
    $('.status').addClass('yes');
  }
});
