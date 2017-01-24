$(function(){

    if ($(window).width() < 800){
        $('.site-header.homepage').data('size','small');
    }else{
        $('.site-header.homepage').data('size','big');
    }

});

$(window).scroll(function(){

    var duration = 300;

    if ($(window).width() >= 600){
        if($(document).scrollTop() > 40)
        {
            if($('.site-header.homepage').data('size') == 'big')
            {
                $('.site-header.homepage').data('size','small');
                $('.site-header.homepage').stop().animate({ padding:'20px 0' }, { queue: false, duration: duration });
                $('.site-header.homepage .trigger a.page-link').stop().animate({ fontSize:'14px' }, { queue: false, duration: duration });
                $('.site-header.homepage .site-nav .responsive-menu').stop().animate({paddingTop:'85px'}, { queue: false, duration: duration });
            }
        }
        else
        {
            if($('.site-header.homepage').data('size') == 'small')
            {
                $('.site-header.homepage').data('size','big');
                $('.site-header.homepage').stop().animate({padding:'35px 0'}, { queue: false, duration: duration });
                $('.site-header.homepage .trigger a.page-link').stop().animate({ fontSize:'18px' }, { queue: false, duration: duration });
                $('.site-header.homepage .site-nav .responsive-menu').stop().animate({paddingTop:'160px'}, { queue: false, duration: duration });
            }  
        }
    }else{
        $('.site-header.homepage .trigger a.page-link').stop().animate({ fontSize:'14px' }, { queue: false, duration: duration });
        $('.site-header.homepage').stop().animate({ padding:'20px 0' }, { queue: false, duration: duration });
        $('.site-header.homepage .site-nav .responsive-menu').stop().animate({paddingTop:'85px'}, { queue: false, duration: duration });        
    }
});