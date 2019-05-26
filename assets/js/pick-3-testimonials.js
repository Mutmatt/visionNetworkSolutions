(function (){
  var testimonails = $(".testimonial");
  
  //for (var i = 0; i < testimonails.length; i) {
  for (var i = 0; i < 3; i) {
      var r = Math.floor(Math.random() * testimonails.length);
    var showThisTestimonial = $(testimonails[r]);
    if (showThisTestimonial.hasClass('d-none')) {
      showThisTestimonial.removeClass('d-none');
      i++;
    }
  }
}())