
$(document).ready(function(){

   $(".nav-btn").click(function(){
       let id = this.id;
        $('html, body').animate({
            scrollTop: ($("#"+id+"-div").offset().top)
        },1000);

   })
  
  });
  
  