(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Deshabilitar formulario
document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())
