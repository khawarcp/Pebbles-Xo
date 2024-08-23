// Homepage Steps owl carousel
$(document).ready(function(){
    const step_slide = $("#step-guide");
    // Initialize Owl Carousel
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
      stagePadding: 200, // Show portion of previous and next slides
      onInitialized: updateCounter, // Update counter on initialization
      onTranslated: updateCounter ,  // Update counter on translation
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
      let currentSlide = event.item.index - event.relatedTarget._clones.length / 2 + 1;
      let totalSlides = event.item.count;
      if (currentSlide > totalSlides) {
          currentSlide = currentSlide - totalSlides;
      } else if (currentSlide <= 0) {
          currentSlide = totalSlides + currentSlide;
      }
      $('.current-slide').text(currentSlide);
      $('.total-slides').text(totalSlides);         
    }
  });

  $(document).ready(function(){
    var owl = $('.tips-from-expert-slider .owl-carousel');
    
    owl.owlCarousel({
      loop:true,
      margin:16,
      nav:true,
      responsiveClass:true,
      center:true,
      navText: [
        "<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/prev-arrow.svg'>",
        "<img src='https://cdn.shopify.com/s/files/1/0658/9733/2918/files/next-arrow.svg'>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3.5
          }
      },
      onInitialized: updateSliderCounter,  // Call counter update on initialization
      onChanged: updateSliderCounter        // Call counter update on slide change
    });
  
    function updateSliderCounter(event) {
      var currentSlide = (event.item.index - event.relatedTarget._clones.length / 2) % event.item.count + 1;
      var totalSlides = event.page.count;
  
      // Format numbers with leading zero
      $('.current-slide').text(('0' + currentSlide).slice(-2));
      $('.total-slides').text(('0' + totalSlides).slice(-2));
    }
  
    // Initialize the counter container
    var counterHtml = `
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
  