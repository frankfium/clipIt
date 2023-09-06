$(window).load(function(){
  new WOW().init();
  setTimeout(function(){
  $('#scrub').fadeOut();
  $('#preloader').fadeOut(); // set duration in brackets
}, 4500);
});
    $(function() {
      $('body').vegas({

        slides: [
          { src: 'images/bg02.jpg' },
          { src: 'images/bg03.jpg' },
          { src: 'images/first.jpg' }

        ],
        overlay: 'images/07.png',
        timer: false,
        transition: [ 'fade' ]
      });
    });
  $(document).ready(function() {
      $(function() {
    new TypeIt('#textContainer');
    new TypeIt('#textContainer').go();
  });

});
