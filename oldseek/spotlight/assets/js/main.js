// sonax
// ------------------------------------------------------------
"use strict";
$(document).ready(function(){

  // ----------- events pjax(send,complete) -----------

  // preloader
  document.addEventListener('pjax:send', function() {
      NProgress.start();
  });

  // calls functions for pjax
  document.addEventListener('pjax:complete', function() {

      NProgress.done();
      skillBar();
      owlCrl();
      filterWorks();
      panelHeader();
      mPopup();
      form();
      scroll();
      parallaxBg();
  });

  //#####################################################

    // ---- init parallax-bg ---------------------------------
  function parallaxBg(){
     $('body').parallaxify({
      alphaFilter: 0.9,
      motionAngleX: 50,
      motionAngleY: 50,
      alphaPosition: 0.65,
      useMouseMove: true
     });
  }
  parallaxBg();

  // #################################################

  
  // ---- mobile navigation -----------------------------
    $('.main-btn').on('click', function() {
      $('.float-btn ul').toggleClass('toggled');
      $(".mobile-icon").toggleClass("rotate_1");
    });

   //#####################################################
    
   // -- skillbar function ------------------------------

  function skillBar(){

   $('.circle').circleProgress({
      lineCap: 'round',
      size: 140,
      thickness: 6,
      startAngle: -Math.PI / 4 * 3,
      emptyFill: "#ffcc80",
      fill: {
              color: "#9c27b0"
            }
    });

   }

  skillBar();

  //####################################################


  // -- scrollbar function -----------------------------
  
    function scroll(){
        var container = document.querySelector('.p_scroll');
        var ps = new PerfectScrollbar(container,{
          wheelSpeed: 2,
          minScrollbarLength: 20
        });
            container.addEventListener('ps-scroll-down',function(){
            setTimeout(function(){
                                    headPanel.removeClass('show-panel');
                                    }, 500);
            
        });
            container.addEventListener('ps-scroll-up',function(){
            setTimeout(function(){
                                    headPanel.addClass('show-panel');
                                    }, 500);
        });
  }
  scroll();

  //###################################################


  // ----- condition when the page is reloaded ------

  var indexPath = "/index.html",
      slash     = "/",
      headPanel = $(".header-panel");

  function panelHeader(){

    var section = window.location.pathname;
    if(section == indexPath) {
      headPanel.removeClass('show-panel');

    } 
    else {
      headPanel.addClass('show-panel');

    }
    if ( section == slash ){
      headPanel.removeClass('show-panel');

    }

  }

  panelHeader();

  //################################################


// --- init Pjax.js -----------------------------

var pjax = new Pjax({

    debug:false,
    analytics:true, 
    cacheBust:false,  
    elements: ".content-link", // default is "a[href], form[action]"
    selectors: ["title",".name-page","#pjax-container"],
    switches: {
    "#pjax-container": Pjax.switches.sideBySide
    },

    switchesOptions: {
    "#pjax-container": {
    classNames: {
        // class added on the element that will be removed
        remove: "animated time-anime zoomOut",
        // class added on the element that will be added
        add: "animated time-anime slideInUp"
      }
    }
  }

});

//###################################################

// ---  popover -------------------------------------

$('[data-toggle="popover"]').popover({
    placement:'left',
    trigger:'hover'
});

//###################################################

// ----- OWL Carousel ----------------------------

function owlCrl() {

  $(".clients-slide").owlCarousel({ 
    center: true,
    loop: true,
    autoplay: true,
    responsiveClass:true,
    autoWidth:true,
    items:5,
      responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
});

} 

owlCrl(); 

//###############################################

// --- initialize shuffle plugin ---------------

function filterWorks() {

    var $grid = $('#grid'),
    filter = $('#filter a'); 

  // reshuffle when user clicks a filter item 
filter.on('click',function (e) {

    e.preventDefault();
    // set active class
    filter.removeClass('active-filter');
    $(this).addClass('active-filter');
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );

  });

$grid.imagesLoaded( function() {
  // images have loaded
    $grid.shuffle({
    itemSelector: '.item'
   }); 
});

}

filterWorks();

//################################################

//---- Magnific-popup ---------------------------

function mPopup(){
  $('.image-link').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
    mainClass:'mfp-fade',

    gallery: {
    enabled: true,
    tCounter: '<span class="mfp-counter">%curr% / %total%</span>' ,
    }
  });
}
mPopup();
//################################################

});