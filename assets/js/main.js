$(function(){$("#accordion").accordion({active:!1,collapsible:!0,heightStyle:"content"})}),$(function(){$(window).width()<800?$(".site-header.homepage").data("size","small"):$(".site-header.homepage").data("size","big")}),$(window).scroll(function(){var e=300;$(window).width()>=600?$(document).scrollTop()>40?"big"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","small"),$(".site-header.homepage").stop().animate({height:"70px"},{queue:!1,duration:e}),$(".site-header.homepage .trigger a.page-link, .site-header.homepage a.page-anchor").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e}),$(".site-header.homepage a.page-anchor").addClass("semSeta")):"small"==$(".site-header.homepage").data("size")&&($(".site-header.homepage").data("size","big"),$(".site-header.homepage").stop().animate({height:"100px"},{queue:!1,duration:e}),$(".site-header.homepage .trigger a.page-link, .site-header.homepage a.page-anchor").stop().animate({fontSize:"18px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"160px"},{queue:!1,duration:e}),$(".site-header.homepage a.page-anchor").removeClass("semSeta")):($(".site-header.homepage .trigger a.page-link, .site-header.homepage a.page-anchor").stop().animate({fontSize:"14px"},{queue:!1,duration:e}),$(".site-header.homepage").stop().animate({height:"70px"},{queue:!1,duration:e}),$(".site-header.homepage .site-nav .responsive-menu").stop().animate({paddingTop:"85px"},{queue:!1,duration:e}),$(".site-header.homepage a.page-anchor").addClass("semSeta"))}),$(function(){$(".map-embed").on("click",function(){$(this).toggleClass("active")})}),jQuery(document).ready(function(){function e(e){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}$(".input-group input").focusout(function(){$(this).val()&&$(this).attr("value",$(this).val()).parent().find(".error").hide()});var a={};a.method="GET",a.url="https://tripco-api.herokuapp.com/medium",a.contentType="application/json; charset=utf-8",a.dataType="json",$.ajax(a).done(function(e){console.log("response",e);var a,t,i=$("#medium-template").html(),n=Handlebars.compile(i);$.each(e,function(e,i){var o=new Date(i.date);a={postTitle:i.title,postSubtitle:i.subtitle,postDate:o.getDate()+"/"+o.getMonth()+"1/"+o.getFullYear(),postLink:"https://medium.com/hotel-coaching/"+i.link},t=n(a),$("#medium-posts").append(t)})}).fail(function(e){console.log("error",e)}).always(function(){$(".medium-loading").hide()}),$(".sendMailing").on("click",function(a){a.preventDefault();var t=$(this).parent();return $(t).find(".error").hide(),$(t).find("[name=email]").val()&&e($(t).find("[name=email]").val())?($(".sendMailing").addClass("sending"),$(".newsletter-success").hide(),$(".newsletter-error").hide(),a.preventDefault(),void $.ajax({method:"POST",url:"https://tripco-api.herokuapp.com/sendEmail",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({email:$(t).find("[name=email]").val()})}).done(function(e){$(t).parent().find(".newsletter-success").show(),$(t).hide()}).fail(function(e,a){$(t).find(".newsletter-error").show()}).always(function(){$(".sendMailing").removeClass("sending")})):($(t).find("[name=email]").parent().find(".error").css("display","flex").hide().fadeIn(),$(t).find("[name=email]").parent().find("input").focus(),!1)})}),$(document).ready(function(){$(".site-nav .trigger a").clone().appendTo($(".responsive-menu"))}),$(function(){$("header.site-header .site-nav .menu-icon").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).hasClass("active")?($("header.site-header .site-nav .responsive-menu").css("display","flex").hide().fadeIn(),$("body, html").css("overflow","hidden")):($("header.site-header .site-nav .responsive-menu").fadeOut(),$("body, html").css("overflow","initial"))})}),$(function(){$("#banner-fullwidth").owlCarousel({nav:!0,autoplay:!0,autoplaySpeed:1200,autoplayTimeout:8e3,autoplayHoverPause:!0,slideSpeed:1300,items:1,loop:!0,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]})}),$(function(){$(".portfolio-item a").on("click",function(e){e.preventDefault(),$(".portfolio-item a").removeClass("active"),$(".portfolio-display-item").removeClass("active"),$(this).addClass("active"),$(".portfolio-display-item#"+$(this).data("banner")).addClass("active")})}),$(function(){var e=70;$('a[href*="#"]:not([href="#"])').click(function(){if(""!==this.hash){event.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top+window.scrollY-e},800,function(){window.location.hash=a})}})});