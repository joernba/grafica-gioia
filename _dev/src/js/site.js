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
// Colorbox stuff
$(".gallery").colorbox({rel:'gallery', transition: 'fade', maxWidth: '95%', maxHeight: '95%', slideshow:false, previous:'prev', next: 'next'});
// Typed.js stuff
if(window.__isFirstAnimation !== true){
  window.__isFirstAnimation = true;
  $('.js-typed')[0].style.display = 'none';
  setTimeout(function(){
      function setUnsaveable (node) {
            for (var i = 0; i < node.childNodes.length; i++) {
              var child = node.childNodes[i];
            }
        }

       var clone = $('.js-typed')[0].cloneNode(true);

       $(clone).insertAfter($('.js-typed'));
       clone.style.display = '';

       $(".js-typed-item", clone).each(function(index, item){

         var string = item.innerHTML;
         item.innerHTML = '';

         $(item).typed({
           strings: [string],
           contentType: 'html',
           startDelay: index * 1000,
           showCursor: false,
           typeSpeed: -60
         });

      });
  }, 1500);
} else {
  $('.js-typed')[0].style.display = '';
}
