function displaylightbox(url, options)
{
   options.items = { src: url };
   options.type = 'iframe';
   $.magnificPopup.open(options);
}
document.addEventListener('DOMContentLoaded', function(event)
{
   var galleryCarousel = new bootstrap.Carousel('#galleryCarousel', {interval: 0, pause: false});
});
$(document).ready(function()
{
   $("a[href*='#testimonials4LayoutGrid']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_testimonials4LayoutGrid').offset().top }, 600, 'easeOutExpo');
   });
   $("a[href*='#form3LayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_form3LayoutGrid1').offset().top-80 }, 600, 'easeInQuad');
   });
});
