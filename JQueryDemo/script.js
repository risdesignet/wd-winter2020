// $(".box1").css("background","red");
// $(".box1").click(function() {
//   $(this).css("background","red");
// });


// Toggle background color to red
$(".box1").click(function() {
  $(this).toggleClass("red");
});

// hover over box1 change the background color of box2 and add text after box2 that says "I am hovering"
// insert a smaller box inside of box2 on hover
$(".box1").hover(function() {
  $(".box2").toggleClass("red");
  $("#hoveringTextBox").toggle();
  $(".box2").append("<div class='box' style='width:100px; height:100px;'></div>");
});

// Make all of the boxes draggable
$(".box").draggable();
