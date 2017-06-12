// timeout function to blend in pages
setTimeout(function() {
  document.body.className = document.body.className.replace(" fade-out","");
}, 300);
// height function for absolute positioned elements
// Bind to the resize event of the window object
$(window).on("resize", function () {
  var h = $(".js-height").height();
  $(".js-assign-height").height(h);
// Invoke the resize event immediately
}).resize();
