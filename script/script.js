
// $(function(){
//     setInterval(function(){
//         if($('.mainbotBk').hasClass("swiper-slide-active") === true ) {
//             $(".mainfull_navi").addClass("bk");
//             $("header.head").css("border","none");
//             $(".logo_header").css("color","#000");
//             $("nav > ul > li > a").css("color","#000");
//             $("header .menu-icon .navicon").addClass("bk");
//         }else {
//             $(".mainfull_navi").removeClass("bk");
//             $("header.head").css("border-bottom","1px solid #fff");
//             $(".logo_header").css("color","#fff");
//             $("nav > ul > li > a").css("color","#fff");
//             $("header .menu-icon .navicon").removeClass("bk");
//         }
//         if($('.mainfullbox_Last').hasClass("swiper-slide-active") === true){
//             $("header.head").css("background","#000");
//         }else{
//             $("header.head").css("background","transparent"); 
//         }
//     },500);

//     var ww = $(window).width();
//     var mySwiper = undefined;

//     function initSwiper() {

//     if (ww >= 640 && mySwiper == undefined) {
//         mySwiper = new Swiper(".swiper-container", {
//         speed: 500,
//         direction: 'vertical',
//         mousewheel: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         watchOverflow : true,
//             on: {
//                 slideChange: function() {
//                     setTimeout(function () {
//                     mySwiper.params.touchReleaseOnEdges = false;  
//                     mySwiper.params.mousewheel.releaseOnEdges = false;
//                     });
//                 },
//                 reachEnd: function() {
//                     setTimeout(function () {
//                         mySwiper.params.touchReleaseOnEdges = true;
//                         mySwiper.params.mousewheel.releaseOnEdges = true;
//                     }, 500);
//                 },
//                 reachBeginning: function() {
//                     setTimeout(function () {
//                         mySwiper.params.touchReleaseOnEdges = true;
//                         mySwiper.params.mousewheel.releaseOnEdges = true;
//                     }, 500);
//                 }
//         }
//     });
//     $("footer").addClass("foot_main");
//     } 
//     }

//     initSwiper();

//     $(window).on('resize', function () {
//     setTimeout(function(){
//         ww = $(window).width();
//         initSwiper();
//     },15);
//     });
//     $("header").addClass("head");
// });


$(window).scroll(function () {
  if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height()) {

    $("header #head").css("background","#000");
  } 
  else {

    $("header #head").css("background","#fff");
  }
});





// scroll
$(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 750);
	});
	
});



$(document).ready(function () {

    $('.m_menuWrap > a.menuOpen').click(function () {

        $('.m_nav').show(200);

        $('.m_menuWrap > a.menuOpen').hide();

    });

    $('.m_menuWrap > a.menuClose').click(function () {

        $('.m_nav').hide(200);

        $('.m_menuWrap > a.menuOpen').show();

    });

});

