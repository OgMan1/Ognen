
    
$(document).ready(function () {

      AOS.init({
        duration: 1200
       });

 $('#myVideo').attr('src', 'vid/Sky.mp4');
$( ".imgSecondRow2" ).on('mouseenter' ,function() {
  $('.imgSecondRow2').attr('src', 'img/logo_transparent5.png');
});
$( ".imgSecondRow2" ).on('mouseleave' ,function() {
  $('.imgSecondRow2').attr('src', 'img/logoNewTrans.png').css('transition' , 'transform 0.5s linear');
});
$( ".h1Flex" ).on('mouseenter' ,function() {
  $('.h1Flex').css({"transform": "scale(1.15)", "transition": "transform 0.5s linear"});
  $('.spH1').css('display', 'block');
});
$( ".h1Flex" ).on('mouseleave' ,function() {
  $('.h1Flex').css({"transform": "skewY(-10deg)", "transition": "transform 0.5s linear"});
  $('.spH1').css('display', 'none');
});

  $( '.imgPhone' ).on('mouseenter' ,function() {
    $('.imgPhone').addClass('shake');
  });

  $( '.imgPhone' ).on('mouseleave' ,function() {
    $('.imgPhone').removeClass('shake');
  });

  
$('.fa-music').on('click', function(){
  $('.audioPlayer').trigger("play");
});

let playing = false;

  $('.fa-music').click(function() {
      $(this).toggleClass("fa-pause");

      if (playing == false) {
        $('.audioPlayer').trigger("play");
          playing = true;
          $(this).text(' Chill ON');
      } else {
        $('.audioPlayer').trigger("pause");
        playing = false;
        $(this).text('');
      }
  });

$('#test').on('click', function(){
 let doc = document.getElementsByClassName('fa-moon');
  if(doc.length > 0){  
    moon()
  }  
  else{
    sun()
  }
});

if(moon() == 202) {
  return sun()
} else {
  return moon()
};

 function moon () {
  $('#myVideo').css('display', 'none');
  $('#myVideo2').css('display', 'block');
    $(' .secondRow, .thirdRow, footer, .cardRow ul li').addClass('text-warning'); 
    $('.secondRow h2, .thirdRow h2, .h1Flex,.cardRow h5').css('color' , 'yellow'); 
    $('.logoPic, .logoPicFoot').attr('src', 'img/logoN2.png');
     $('.spH1, #ogSpan, .cardRow ul').css('color', 'aqua');
  $('textarea, input.form-control, .textarea:focus').css({'color':'aqua' , 'border' : '1px solid orange'});
  $('.textarea:focus').css('color','purple' );
  $('.btnForm, .btn-danger, .navText').addClass('bg-warning'); 
  $('.progBarInfo').removeClass('bg-danger').addClass('bg-info');
     $('.fa-moon').removeClass('fa-moon').addClass('fa-sun'); 
    $('.imgSecondRow2').attr('src', 'img/logo_transparent.png');
    $( ".imgSecondRow2" ).on('mouseenter' ,function() {
      $('.imgSecondRow2').attr('src', 'img/logo_transparent3.png');
    });
    $( ".imgSecondRow2" ).on('mouseleave' ,function() {
      $('.imgSecondRow2').attr('src', 'img/logo_transparent.png').css('transition' , 'transform 0.5s linear');
    });
  }

  function sun () {
  $('#myVideo2').css('display', 'none');
  $('#myVideo').css('display', 'block');
    $('.h1Flex, .secondRow h2, .thirdRow h2, .cardRow h5').css('color' , 'red'); 
    $(' .secondRow, .thirdRow, footer, .cardRow ul li').removeClass('text-warning'); 
    $('.h1Flex').removeClass('h1FlexDark'); 
  $('.progBarInfo').removeClass('bg-info').addClass('bg-danger');
  $('input.form-control').css({'color':'rgb(51, 0, 51)'});
  $('.btnForm, .btn-danger, .navText').removeClass('bg-warning'); 
    $('.navbar-light .navbar-nav .nav-link').css('color' , 'black');
    $('.cardRow ul li').css('color', 'rgb(51, 0, 51)');
    $('.cardRow ul, #ogSpan').css('color', 'red');
    $('.spH1').css('color', 'rgb(63, 15, 117)');
    $('.navText').css('background-color','transparent'); 
    $('textarea, input.form-control, .textarea:focus').css({'border' : '1px solid red'});
    $('.logoPic, .logoPicFoot').attr('src', 'img/logo.png');    
    $('.fa-sun').removeClass('fa-sun').addClass('fa-moon');
    $('.imgSecondRow2').attr('src', 'img/logoNewTrans.png');
    $('footer').css('color','rgb(51, 0, 51)' );
    $( ".imgSecondRow2" ).on('mouseenter' ,function() {
      $('.imgSecondRow2').attr('src', 'img/logo_transparent5.png');
    });
    $( ".imgSecondRow2" ).on('mouseleave' ,function() {
      $('.imgSecondRow2').attr('src', 'img/logoNewTrans.png').css('transition' , 'transform 0.5s linear');
    });
  }


});