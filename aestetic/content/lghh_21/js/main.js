/*FULLPAGE*/
var sectionCount = $('main .section').length;
function initialization(){
    $('main').fullpage({
        navigation:true,
        navigationPosition:'right',
        navigationTooltips: ['BANNER', 'BEST ITEM','INTRO','INFORMATION','ADVERTISEMENT'],
        showActiveTooltip: true,
        responsiveWidth: 500,
        afterLoad: function(anchorLink, index){

            if(index != sectionCount-5){
                $('header').addClass('fixed');
    
            } else {
                $('header').removeClass('fixed');
            };
    
            if(index == sectionCount-2){
                /* NUMBER ANIMATE */
                var target = document.querySelector('.lghh_art article h3');
                var targetNum = target.getAttribute('data-rate');
                var num = 0;
    
                //target.innerText = 1;
                var timer = setInterval(function(){
                    ++num;
                    target.innerText = num;
                    if(num==targetNum){
                        clearInterval(timer);
                    }
                },10);
            };
        }
    });
}
initialization();
$(window).resize(function(){
    var width = $(this).width();
    //반응형
    if(width <= 500){
        $.fn.fullpage.destroy('all');
    }else{
        initialization();
    };
    if(width <= 375){
        $.fn.fullpage.destroy('all');
    }else{
        initialization();
    }
});

/*HEADER FORM*/
var activeSearch = $('header nav form'),
seachInput = activeSearch.find('input'),
searchLabel = activeSearch.find('label'),
closeSearch = activeSearch.find('.close_white');

activeSearch.click(function(){
    searchLabel.addClass('active');
    seachInput.addClass('active');
});
closeSearch.click(function(){
    searchLabel.removeClass('active');
    seachInput.removeClass('active');
});

/*ASIDE ACCORDION*/
$( "#accordion" ).accordion({
    collapsible: true
  });

var aside = $('header .side_bar .aside_bg'),
asideClose = aside.find('.close'),
asideToggle = $('header .nav_right .toggle');

asideToggle.click(function(){
    aside.addClass('active');
});
asideClose.click(function(){
    aside.removeClass('active');
});

/*SITE MAP*/
var siteMap = $('header .site_map .sitemap_bg'),
siteMapClose = siteMap.find('.close_white'),
siteMapMenu = $('header .nav_right .sitemap_menu');

siteMapMenu.click(function(){
    siteMap.addClass('active');
});
siteMapClose.click(function(){
    siteMap.removeClass('active');
});

/*PRODUCT SLICK*/
$('.product_slick').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
/*VIDEO LIST*/
$('.video_list').bxSlider({
    mode:'vertical',
    pager:false
});



/*COOKIE*/
/*
하루 안보기 체크하고 닫기
 -> 다음엔 팝업 안본다. 쿠키 생성, 재방문한 것 처럼

하루 안보기 체크하지 않고 닫기 
 ->팝업 계속 뜸, 쿠키 삭제됨, 처음 방문한 것 처럼

재방문여부 확인 = 쿠키존재여부 확인
없다면 팝업 노출
있다면 팝업 미노출
*/
let myPopup = document.querySelector('.popup'),
closeBtn = document.querySelector('button'),
oneDayCheck = document.querySelector('#nomore');

function checkcookie(name){
var cookies = document.cookie.split(';');
var visited = false; //재방문확인

for(ck of cookies){
    if(ck.indexOf(name) > -1){
        visited = true; //재방문했다면 true
    }            
}
if(visited){
    myPopup.style.display = 'none';
    //alert('재방문');
}else{
    myPopup.style.display = 'block';
    //alert('첫방문');
}
}

checkcookie('LGHH portfolio');

function setcookie(name, value, day){
var date = new Date();
date.setDate(date.getDate()+day);

var myCookie = '';
myCookie = `${name}=${value};Expires=${date.toUTCString()}`;   

document.cookie = myCookie;
//alert('쿠키저장 성공');
}//setcookie

function deleteCookie(name,value){
var date = new Date(); 
date.setDate(date.getDate()-1);

var myCookie = '';
myCookie = `${name}=${value};Expires=${date.toUTCString()}`; 

document.cookie = myCookie;
}   

closeBtn.addEventListener('click',()=>{
    if(!oneDayCheck.checked){ //체크안되어 있을 때
        deleteCookie('LGHH portfolio','home');
    }else{ //체크되어 있을 때
        setcookie('LGHH portfolio','home',1);
    }
    myPopup.style.display = 'none';
});





