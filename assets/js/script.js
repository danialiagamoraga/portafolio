$(function () {
  
  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var hashtag = this.hash;

      $("html, body").animate({
        scrollTop: $(hashtag).offset().top
      }, 800, function(){
        window.location.hash = hashtag;
      });
    }
  });

    $('[data-toggle="tooltip"]').tooltip()
  })