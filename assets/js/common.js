/*===============Video Model Js===================*/ 

 $(".progress-bar").loading();
  			  $( "#datepicker" ).datepicker();
 	
  			  $( "#datepicker2" ).datepicker();
 	
 $("#video1").click(function() {
     $('#my-modal1').modal('show');
    
 });
 
$("#video2").click(function() {
    $('#my-modal2').modal('show');
    
});

$("#video3").click(function() {
    $('#my-modal3').modal('show');

});

$(".video4").click(function() {
    $('#my-modal4').modal('show');

});

/*********Countdown 1**********/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 28 * 11 * 28 * 60 * 1000);
 if ( $('#clockdiv').length){
initializeClock('clockdiv', deadline);
 }

/*********Countdown 2**********/
var deadline = new Date(Date.parse(new Date()) + 28 * 11 * 28 * 60 * 1000);
if ( $('#clockdiv2').length){
initializeClock('clockdiv2', deadline);
}

/*********Countdown 3**********/
var deadline = new Date(Date.parse(new Date()) + 28 * 11 * 28 * 60 * 1000);
if ( $('#clockdiv3').length){
initializeClock('clockdiv3', deadline);
}

/*********Countdown 3**********/
var deadline = new Date(Date.parse(new Date()) + 28 * 11 * 28 * 60 * 1000);
if ( $('#clockdiv4').length){
initializeClock('clockdiv4', deadline);
}

/*===============Counter Js===================*/   

 $('.counter_number1').counterUp({
        delay: 1,
        time: 1600
});


/*===============Progress Bar Minimal===================*/   
$('#jq').LineProgressbar({
percentage:80,
});
$('#html').LineProgressbar({
percentage:70,
fillBackgroundColor: '#DA4453'
});
$('#css').LineProgressbar({
percentage:90,
fillBackgroundColor: '#E0C341'
});
$('#Marketing').LineProgressbar({
percentage:60,
fillBackgroundColor: '#E0C341'
});

/*===============Progress Bar Big===================*/  
$('#branding').LineProgressbar({
percentage:80,
});
$('#photo').LineProgressbar({
percentage:70,
fillBackgroundColor: '#DA4453'
});
$('#web').LineProgressbar({
percentage:90,
fillBackgroundColor: '#E0C341'
});
$('#Market').LineProgressbar({
percentage:60,
fillBackgroundColor: '#E0C341'
});

/*===============Progress Bar Big===================*/     

/*===============Gallery Portfolio 1 ===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter:not(.filter2, .filter3, .filter4, .filter5, .filter6) a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter:not(.filter2, .filter3, .filter4, .filter5, .filter6) a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });

    });
    
/*===============Gallery Portfolio 2===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid2 = $('#grid2');

        $grid2.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter.filter2 a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter.filter2 a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid2.shuffle('shuffle', groupName );
        });

    });
    
/*===============Gallery Portfolio 3===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid3 = $('#grid3');

        $grid3.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter.filter3 a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter.filter3 a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid3.shuffle('shuffle', groupName );
        });

    });
    
    
/*===============Gallery Portfolio 4===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid4 = $('#grid4');

        $grid4.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter.filter4 a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter.filter4 a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid4.shuffle('shuffle', groupName );
        });

    });   
    
    
/*===============Gallery Portfolio 5===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid5 = $('#grid5');

        $grid5.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter.filter5 a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter.filter5 a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid5.shuffle('shuffle', groupName );
        });

    }); 
    
/*===============Gallery Portfolio 6===================*/  
$(document).ready(function() {

        /* initialize shuffle plugin */
        var $grid6 = $('#grid6');

        $grid6.shuffle({
            itemSelector: '.item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.filter.filter6 a').click(function (e) {
            e.preventDefault();

            // set active class
            $('.filter.filter6 a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid6.shuffle('shuffle', groupName );
        });

    });       

/*================Image Convert to Background Image Js======================*/
$(document).ready(function() {
  $('.background-image-maker').each(function() {
    var imgURL = $(this).next('.holder-image').find('img').attr('src');
    $(this).css('background-image', 'url(' + imgURL + ')');
  });
});

$(document).ready(function() {
  $('.background-pattern').each(function() {
    var imgURL = $(this).next('.holder-image').find('img').attr('src');
    $(this).css('background-image', 'url(' + imgURL + ')');
  });
});
/*================Testimonial Slider Js Style -1======================*/
$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});

/*================Testimonial Slider Js Style -2======================*/
$(document).ready(function(){
    $(".testimonial-style2").owlCarousel({
        items:2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});

/*================Testimonial Slider Js Style -3======================*/
$(document).ready(function(){
    $(".testimonial-style3").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});
/*================Testimonial Slider Js Style -4======================*/
$(window).load(function () {
        $('.testi-slider').flexslider({
            controlNav: false,
            directionNav: true
        });
        });

/*================Testimonial Slider Js Style -5======================*/
$(window).load(function () {
        $('.testi-slider2').flexslider({
            controlNav: false,
            directionNav: true
        });
        });        


/*================Testimonial Slider Js Style -6======================*/
$(window).load(function () {
        $('.testi-slider3').flexslider({
            controlNav: false,
            directionNav: true
        });
        });     
        
        
/*================Testimonial Slider Js Style -7======================*/
$(document).ready(function(){
    $(".testimonial-style7").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});

/*================Testimonial Slider Js Style -8======================*/
$(document).ready(function(){
    $(".screenshot").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        pagination: false,
        autoPlay:true
    });
});


/*================Animate Js======================*/
$(function () {
  //  $('.tab-content:not(:first)').hide();
   // $('#tabs-nav a').bind('click', function (e) {
      //  e.preventDefault();
      //  $this = $(this);
      //  $target = $(this.hash);
      //  $('#tabs-nav a.current').removeClass('current');
      //  $('.tab-content:visible').fadeOut("slow", function () {
       //     $this.addClass('current');
       //     $target.fadeIn("slow");
      //  });
   // }).filter(':first').click();
});
/*================Circle Process Bar Js======================*/
var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
window.onload = function(){
	var max = -219.99078369140625;
	forEach(document.querySelectorAll('.progress'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		value.querySelector('.value').innerHTML = percent + '%';
	});
}


/*================Fanxy Box Gallery Js======================*/
$(document).ready(function() {
    $('.fancybox').fancybox();
});

/*================Master Slider Js======================*/
var slider = new MasterSlider();

    //adds Arrows navigation control to the slider.
      slider.control('arrows');
   //slider.control('timebar', {insertTo: '#masterslider'});
    //slider.control('bullets');

    slider.setup('masterslider', {
        width: 1400, // slider standard width
        height: 880, // slider standard height
        space: 1,
        layout: 'fullwidth',
        loop: true,
        preload: 0,
        instantStartLayers: true,
        autoplay: true
});


/*================Header Scroll Js======================*/
$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $("#header-fix").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header-fix").removeClass("active");
    }
});


/*================Parallex Js======================*/
$(function(){
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          $('#ios-notice').removeClass('hidden');
          $('.parallax-container').height( $(window).height() * 0.5 | 0 );
        } else {
          $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
          }).trigger('resize');
        }
      });
      
/*================Sidebar Menu======================*/      
$(window).load(function(){
        $("[data-toggle]").click(function() {
          var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
        });
         $(".swipe-area").swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction =="right") {
                           $(".container").addClass("open-sidebar");
                           return false;
                      }
                      if (phase=="move" && direction =="left") {
                           $(".container").removeClass("open-sidebar");
                           return false;
                      }
                  }
          }); 
      });
      
/*================Click Open Search bar======================*/        
$(".glyphicon-search").click(function(){
		$(".search-wrap").css("left","0");
	});
	$(".close-btn").click(function(){
		$(".search-wrap").css("left","-100%");
	});
        
/*================Smooth Scroll js======================*/           
$('.scroll-btn a').smoothScroll();        


/*================Simple  Type Text js======================*/ 
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});



/*================Flex Product Slider Js======================*/ 
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    autoplay: false    
  });
  
  
  
  $('.nav-tabs a').click(function(){
	$($(this).attr('href')).parent().children(".tab-pane").removeClass("active");
	 
	  $($(this).attr('href')).addClass('active');
   });
   
   //jQuery.scrollSpeed(100, 800);

});
$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-angle-up" aria-hidden="true"></i></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    $('#mc-form').ajaxChimp({
    url: 'https://flicksbootstrap.us11.list-manage.com/subscribe/post?u=065f50271050f2b851ebb537a&amp;id=ded34de40d',
      callback: callbackFunction
});
 $('.mc-form').ajaxChimp({
    url: 'https://flicksbootstrap.us11.list-manage.com/subscribe/post?u=065f50271050f2b851ebb537a&amp;id=ded34de40d',
      callback: callbackFunctionCl
});

 $('.cform').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'email/email.php',
            data: $('.cform').serialize(),
            success: function () {
              $('.cform').reset();
                $('.cform .alert').remove();  
               $('.cform').append('<div class="alert alert-success" role="alert">Form Submitted successfully.</div>');
            }
          });

        });
        
});
function callbackFunction (resp) {
     $('#mc-form .alert').remove();    
    if (resp.result === 'success') {
      
         $('#mc-form').append('<div class="alert alert-success" role="alert"><strong>Well done!</strong>  You successfully subscribed.</div>');
    }
    else
    {
          $('#mc-form').append('<div class="alert alert-warning" role="alert"><strong>Warning!</strong> '+resp.msg+'</div>');
    }
}
function callbackFunctionCl (resp) {
     $('.mc-form .alert').remove();    
    if (resp.result === 'success') {
      
         $('.mc-form').append('<div class="alert alert-success" role="alert"><strong>Well done!</strong>  You successfully subscribed.</div>');
    }
    else
    {
          $('.mc-form').append('<div class="alert alert-warning" role="alert"><strong>Warning!</strong> '+resp.msg+'</div>');
    }
}
/*=======================Swiper Slider==================================*/
$(function() {
            $('#dg-container').gallery({
                itemsDesktopSmall:[991,1],
                autoplay:true,
            });
             /* ------- Smooth scroll ------- */
    $(".smooth-scroll a").on("click", function (event) {
        var menu = $("nav.navbar").innerHeight();
        event.preventDefault();
        $("html,body").animate({
            scrollTop: ($(this.hash).offset().top - 10)
        }, 1000);
    });
             /*------ MENU Fixed ------*/
              var $window = $(window);
    $window.scroll(function () {
        var $scroll = $window.scrollTop();
        var $navbar = $(".top-fixed");
        if ($scroll > 100) {
            $navbar.addClass("fixedmenu");
        } else {
            $navbar.removeClass("fixedmenu");
        }
    });
        });
        
/*================Animate Js======================*/
new WOW().init(); 

/*================Client Logo 1 Js======================*/
$(document).ready(function(){
    $(".carousal-client").owlCarousel({
        items:6,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        autoPlay:true,
        pagination: false
    });
});

/*================Client Logo 2 Js======================*/
$(document).ready(function(){
    $(".carousal-client2").owlCarousel({
        items:4,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        autoPlay:true,
        pagination: false
    });
});

/*================Carousal basic 3 Item  Js======================*/
$(document).ready(function(){
    $("#carousal-basic").owlCarousel({
        items:3,
        pagination: false,
        autoPlay: false,
        navigation: true,
        pagination: false,
    });
});
/*================Carousal basic 4 Autoplay Item Js======================*/
$(document).ready(function(){
    $(".autoplay-carousal").owlCarousel({
        items:4,
        pagination: false,
        autoPlay: true,
        navigation: false,
        pagination: false,
    });
});
/*================ Carousal basic 4 Item Js======================*/
$(document).ready(function(){
    $("#carousal-basic-2").owlCarousel({
        items:4,
        pagination: false,
        autoPlay: false,
        navigation: true,
        pagination: false,
    });
});
/*================ Carousal basic Client Logo 6 Item Js======================*/
$(document).ready(function(){
    $(".carousal-basic-client").owlCarousel({
        items:6,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[979,3],
        itemsTablet:[768,2],
        autoPlay:true,
        pagination: false,
        navigation: true,
    });
	
	 $("#bzoom").zoom({
	zoom_area_width: 300,
    autoplay_interval :3000,
    small_thumbs : 4,
    autoplay : false
});
 $(".video-section").background({
                        source: {
                            poster: "dist/images/hero-bg.jpg",
                            mp4: "dist/images/bootsrap4.mp4"
                        }
                    });
					if ( $('.notification').length){
					  $.bootstrapGrowl("<h5>Basic Notification</h5><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus...</p>");
					}
});
$(window).on('load',function(){
                $('#onload').modal('show');
            });
            
            
