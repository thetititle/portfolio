/*메인베너*/
$('.slides').bxSlider({
    pager:false,
    controls:false,
    auto:true
});
var slideUp = $('main .slide-up-wrapper'),
    slideUpBtn = slideUp.find('h3');
    
    slideUpBtn.click(function(){
    slideUp.toggleClass('move');
});

/*스토어베너*/
$('.fade_slides').bxSlider({
    mode: 'fade',
    pager:false,
    controls:false,
    auto:true
});

/*서치 라이트박스*/
var modal = $('header .modal'),
    btnClose = modal.find('.close'),
    btnSearch = $('header .header_menu .search');

btnSearch.click(function(){
    modal.addClass('visible');
});
btnClose.click(function(){
    modal.removeClass('visible');
});

var modal2 = $('.store_menu .modal2'),
    cartClose = modal2.find('.close'),
    btnOrder = $('.store_menu .order .basket');

btnOrder.click(function(){
    modal2.addClass('visible');
});
cartClose.click(function(){
    modal2.removeClass('visible');
});


/*어사이드*/
var aside = $('header aside .aside_bg'),
    asideClose = aside.find('.close_aside'),
    asideToggle = $('header .header_menu .toggle');

asideToggle.click(function(){
    aside.addClass('active');
});
asideClose.click(function(){
    aside.removeClass('active');
});

/*콘텐츠 스와이퍼*/
const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 1.5,
    spaceBetween: 15,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*아코디언*/
$( "#accordion1" ).accordion({
    collapsible: true
});
$( "#accordion2" ).accordion({
    collapsible: true
});

/*바텀메뉴 위치*/
var bottomMenu = $('.bottom_menu');

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        bottomMenu.fadeOut();
    }else{
        bottomMenu.fadeIn();
    }
});

/*슬릭*/
$('.reference').slick({
});

/*찜하기*/
var addToHeart = $('.add_to_heart'),
    zzimHeart = addToHeart.find('.heart');

zzimHeart.click(function(){
    $(this).toggleClass('heart');
    $(this).toggleClass('heart_full');
});

/*탭*/
$( "#tabs" ).tabs();
