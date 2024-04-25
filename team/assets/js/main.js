(function ($) {
    "use strict";
    
    new WOW().init();  
    
    
    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    
    
    /*---stickey menu---*/
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop(),
           screensize = $(window).width();
        if(screensize >= 480){
           if (scroll < 100 ) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
        }
    });
    
    // Slick Slider Activation
    var $sliderActvation = $('.slick_slider_activation');
    if($sliderActvation.length > 0){
        $sliderActvation.slick({
          prevArrow:'<button class="prev_arrow"><i class="ion-ios-arrow-left"></i></button>',
          nextArrow:'<button class="next_arrow"><i class="ion-ios-arrow-right"></i></button>',
        });
    };
    
  
     $('.off_canvars_overlay,.header_sidebar_menu a').on('click', function(){
        $('.off_canvars_overlay,.overlay__content').addClass('active')
    });
    
    $('.off_canvars_overlay,.about_close_icon a').on('click', function(){
        $('.off_canvars_overlay,.overlay__content').removeClass('active')
    });
    
    
    
    
    /*---canvas menu activation---*/
    $('.canvas_open,.off_canvars_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });
    
    
    $(document).ready(function() {
      $('select').niceSelect();
    });

      /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*--- counterup activation ---*/
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

    
    /*---portfolio Isotope activation---*/
     $('.blog_masonry_activation').imagesLoaded(function () {

        // filter items on button click
        $('.blog_messonry_button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $(this).siblings('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            $grid.isotope({
                filter: filterValue
            });
        });

        // Masonry
        var $grid = $('.blog_masonry_activation').masonry({
            itemSelector: '.blog_mesonry_list',
            percentPosition: true,
            transitionDuration: '0.7s',
            //itemSelector: '.grid-item',
            columnWidth: '.masonary-sizer'
        });

        // init Isotope
        var $grid = $('.blog_mesonry_list').isotope({
            percentPosition: true,
            transitionDuration: '0.7s',
            layoutMode: 'masonry',/*
            masonry: {
                columnWidth: '.resizer',
            }*/
        });

    });
    
      
     /*---  Accordion---*/
    $(".faequently-accordion").collapse({
        accordion:true,
        open: function() {
        this.slideDown(300);
      },
      close: function() {
        this.slideUp(300);
      }		
    });	
    
    
    
     /*--- magnific popup ---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery:{enabled:true},
        zoom: {
             enabled: true,
             duration: 300,
        }
    });
    
    /*--- video Popup---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    
    /*--- jarallax ----*/
    $('.jarallax').jarallax({
        speed: 0.3
    });
  
   

    
})(jQuery);	
