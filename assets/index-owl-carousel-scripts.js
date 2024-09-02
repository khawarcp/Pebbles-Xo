
$(document).ready(function(){
  // Homepage Steps owl carousel
    const step_slide = $("#step-guide");
    step_slide.owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      margin: 32,
      autoplay: false,
      autoplayTimeout: 5000,
      navText : ["<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/prev-arrow.svg' alt='previous-icon' width='24' height='24'>","<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/next-arrow.svg' alt='previous-icon' width='24' height='24'>"],
      autoplayHoverPause: true,
      stagePadding: 187, // Show portion of previous and next slides
      onInitialized: updateCounter,  // Call counter update on initialization
      onChanged: updateCounter,      // Call counter update on slide change
      responsive:{
    0:{
        items:1,
       stagePadding: 40,
          margin: 8
    },
    600:{
        items:1,
       margin: 10,
       stagePadding: 100
    },
    1000:{
       margin: 32,
      items:1
    }
}
    });
    
    // Update the slide counter
    function updateCounter(event) {
      let currentSlide = (event.item.index - event.relatedTarget._clones.length / 2) % event.item.count + 1;
      let totalSlides = event.page.count;
  
      // Format numbers with leading zero
      $('.current-slide-step').text(('0' + currentSlide).slice(-2));
      $('.total-slides-step').text(('0' + totalSlides).slice(-2));
    }
  
    // Initialize the counter container
    let counterHtmlStep = `
      <div class="slide-counter">
        <span class="current-slide-step">01</span>
        <div class="dot-navigation-step"></div>
        <span class="total-slides-step">05</span>
      </div>
    `;
    
    // Append the counter container after the carousel
    $('#step-guide').append(counterHtmlStep);
    
    // Move the owl dots into the custom dot-navigation container
    $('#step-guide .owl-dots').appendTo('.dot-navigation-step');
  });


  $(document).ready(function(){
    const tips_expert = $('.tips-from-expert-slider .owl-carousel');
    
    tips_expert.owlCarousel({
      loop:true,
      margin:24,
      nav:true,
        center:true,
      responsiveClass:true,
      center:true,
      navText: [
        "<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/prev-arrow.svg'>",
        "<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/next-arrow.svg'>"
      ],
      responsive:{
          0:{
              items:1.4,
            stagePadding: 0,
             margin:15,
              center:true
          },
          600:{
              items:2.4,
            stagePadding: 0,
              center:true
          },
          1200:{
              items:3.3,
            center:true,
             stagePadding: 0
          }
      },
      onInitialized: updateSliderCounter,  // Call counter update on initialization
      onChanged: updateSliderCounter        // Call counter update on slide change
    });
  
    function updateSliderCounter(event) {
      let currentSlide = (event.item.index - event.relatedTarget._clones.length / 2) % event.item.count + 1;
      let totalSlides = event.page.count;
  
      // Format numbers with leading zero
      $('.current-slide').text(('0' + currentSlide).slice(-2));
      $('.total-slides').text(('0' + totalSlides).slice(-2));
    }
  
    // Initialize the counter container
    let counterHtml = `
      <div class="slide-counter">
        <span class="current-slide">01</span>
        <div class="dot-navigation"></div>
        <span class="total-slides">04</span>
      </div>
    `;
    
    // Append the counter container after the carousel
    $('.tips-from-expert-slider').append(counterHtml);
    
    // Move the owl dots into the custom dot-navigation container
    $('.tips-from-expert-slider .owl-dots').appendTo('.dot-navigation');
  });
$(document).ready(function(){
if ($(window).width() < 991) {
    $('h2.footer-block__heading.inline-richtext').click(function (e) {
      $(this).parent().find('.footer-block__details-content').slideToggle();
      $(this).parent().siblings().children().next().slideUp();
      return false;
    });
    // $('h2.footer-block__heading.inline-richtext').click(function (e) {
    //   $('.footer-block.grid__item.footer-block--menu').find('ul').slideUp();
    //   $(this).parent().find('ul').slideDown();

    //   return false;
    // });
  }
    });