$(".accordion_head").click(function () {
    if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        
    }
    if ($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
      
    } else {
        $(this).next(".accordion_body").slideDown(300);
       
    }
});
$('.accordion_head').click(function (e) {
    $(this).parent('.accordian-tabs').toggleClass('active');
    $(this).parent('.accordian-tabs').siblings('.accordian-tabs').removeClass('active');
});