$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a,.links a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


  /*----------------------------------------------------*/
  /*  Sticky Navigation
  ------------------------------------------------------*/
   $(window).on('scroll', function() {

    var y = $(window).scrollTop(),
        topBar = $('header');
     
     if (y > 1) {
        topBar.addClass('sticky');
     }
      else {
         topBar.removeClass('sticky');
      }
    
  });
  

  /*-----------------------------------------------------*/
    /* Mobile Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   toggleButton.on('click', function(event){
    event.preventDefault();

    toggleButton.toggleClass('is-clicked');
    nav.slideToggle();
  });

    if (toggleButton.is(':visible')) nav.addClass('mobile');

    $(window).resize(function() {
    if (toggleButton.is(':visible')) nav.addClass('mobile');
      else nav.removeClass('mobile');
    });

    $('#main-nav-wrap li a').on("click", function() {   

    if (nav.hasClass('mobile')) {       
      toggleButton.toggleClass('is-clicked'); 
      nav.fadeOut();      
    }     
    });


   /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
    ------------------------------------------------------*/
  var sections = $("section"),
  navigation_links = $("#main-nav-wrap li a");  

  sections.waypoint( {

       handler: function(direction) {

       var active_section;

      active_section = $('section#' + this.element.id);

      if (direction === "up") active_section = active_section.prev();

      var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');     

         navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");

    }, 

    offset: '25%'

  });

  /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------*/
    $('.smoothscroll').on('click', function (e) {
    
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });

    }); 