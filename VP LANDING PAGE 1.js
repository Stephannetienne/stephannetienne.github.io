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
$(document).ready(function()
{
   function waitForItUpdate()
   {
      // change the date here
      var dateFuture = new Date("June 18, 2024 12:00:00");
      var dateNow = new Date();
      var seconds = Math.floor((dateFuture - (dateNow))/1000);
      var minutes = Math.floor(seconds/60);
      var hours = Math.floor(minutes/60);
      var days = Math.floor(hours/24);

      hours = Math.round(hours-(days*24));
      minutes = Math.round(minutes-(days*24*60)-(hours*60));
      seconds = Math.round(seconds-(days*24*60*60)-(hours*60*60)-(minutes*60));
                                 
      $('#waitForItDays').html(days);
      $('#waitForItHours').html(hours);
      $('#waitForItMinutes').html(minutes);
      $('#waitForItSeconds').html(seconds);   
   }
   waitForItUpdate();
   setInterval(waitForItUpdate, 1000);
});
