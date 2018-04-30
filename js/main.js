$(document).ready(function() {

  window.sr = ScrollReveal();

  sr.reveal('.navigation',{duration: 800 });
  sr.reveal('.hero-text',{duration: 1300 });
  sr.reveal('.hero-bg',{duration: 1500 });
  sr.reveal('.two-image',{duration: 900 });
  sr.reveal('.two-text',{ duration: 1200 });
  sr.reveal('.three-image',{duration: 900 });
  sr.reveal('.three-text',{ duration: 1200 });
  sr.reveal('.four-image-left',{duration: 900 });
  sr.reveal('.three-text',{ duration: 1100 });
  sr.reveal('.four-image-right',{duration: 1300 });
  sr.reveal('.clients-wrapper',{duration: 900 });
  sr.reveal('.client', { duration: 1200 }, 50);
  sr.reveal('.product-content',{duration: 900 });
  sr.reveal('.product-background',{duration: 1400 });

///////////////

  sr.reveal('.photo-bg',{duration: 700 });
  sr.reveal('.rarec-licence',{duration: 700 });
  sr.reveal('.about-us',{duration: 900 });
  sr.reveal('.flex',{duration: 700 });
  sr.reveal('.form-element',{duration: 700 },50);
  sr.reveal('.contact-address',{duration: 900 });

//////////////

  sr.reveal('.page-header',{duration:900 });
  sr.reveal('.centered-wrapper',{duration: 1300 });
  sr.reveal('.product-content',{duration: 900 });
  sr.reveal('.massive-image',{duration: 900 });


  // SLIDER /////////////////////////////////


	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });

});
