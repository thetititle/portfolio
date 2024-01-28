//--------------------------------------------------------------------배너 변수지정
var slideWrapper = document.querySelector('.banner'),
	slideContainer = document.querySelector('.container_slider'),
	slides = slideContainer.querySelectorAll('.slide'),
	slideCount = slides.length,
    currentIndex = 0,
	slidesHeight = 0,
	pager = slideWrapper.querySelector('.pager'),
    pagerHTML = '',
    timer, //전역변수
    navPrev = slideWrapper.querySelector('#prev'),
    navNext = slideWrapper.querySelector('#next');


//슬라이드의 높이 확인하여 부모의 높이로 지정하기
for(i =0; i<slideCount; i++){
    if(slidesHeight < slides[i].offsetHeight){
        slidesHeight = slides[i].offsetHeight;
    }    
}
slideWrapper.style.height = slidesHeight + 'px';
slideContainer.style.height = slidesHeight + 'px';

// 슬라이드가 있으면 가로로 배열하기
for(x = 0; x < slideCount; x++){
    slides[x].style.left = x *100 +'%';
	//페이저 생성
	pagerHTML += '<a href="">'+ x +'</a>';
}
pager.innerHTML = pagerHTML;
var pagerBtn = pager.querySelectorAll('a');

// 슬라이드 이동 함수
goToSlide(0);
function goToSlide(idx){
	slideContainer.style.left = -100*idx+'%';
	currentIndex = idx;
	console.log(currentIndex);

	//모든 pager에서 active 제거 후 현재 슬라이드 번호에 맞는 pager에 active 추가
	for(var i=0; i<pagerBtn.length; i++){
		pagerBtn[i].classList.remove('active');
	}
	pagerBtn[currentIndex].classList.add('active');

}//goToSlide(0);

//버튼기능 업데이트 함수
//버튼 클릭하면 슬라이드 이동
navNext.addEventListener('click',(e)=>{
	e.preventDefault();
	if(currentIndex != slideCount-1){
		goToSlide(currentIndex+1);
	}else{
		goToSlide(0);
	}
});
navPrev.addEventListener('click',(e)=>{
	e.preventDefault();
	if(currentIndex != 0){
		goToSlide(currentIndex-1);
	}else{
		goToSlide(slideCount-1);
	}
});

pagerBtn.forEach((item,idx)=>{
	item.addEventListener('click', (e)=>{
		e.preventDefault();
		goToSlide(idx);
	});
});

//자동슬라이드
function startAutoSlide(){
	timer = setInterval((e)=>{
		/*
		if(currentIndex != slideCount-1){
			goToSlide(currentIndex + 1);
		}else{
			goToSlide(0);
		}
		*/
		let nextSlide = (currentIndex + 1) % slideCount;
		goToSlide(nextSlide);
	}, 4000);
};

startAutoSlide();

//자동슬라이드 멈추기
slideWrapper.addEventListener('mouseover',()=>{
	clearInterval(timer);
});
slideWrapper.addEventListener('mouseout',()=>{
	/*
	timer = setInterval(function(){
		var nextSlide = (currentIndex + 1) % slideCount;
		goToSlide(nextSlide);
	}, 4000);
	*/
	startAutoSlide();
});

//--------------------------------------------------------------------위클리 베스트 변수 지정
var weeklyWrapper = document.querySelector('.weekly_best_wrapper'),
	weeklyUl = weeklyWrapper.querySelector('.weekly_best_list'), //ul
	weeklySlides = weeklyUl.querySelectorAll('li'),
	currentInx = 0,
	slideCount = weeklySlides.length,
	slideWidth = 261,
    slideMargin = 24,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

//슬라이드 배치
weeklyUl.style.width = (slideWidth*slideCount) + slideMargin*(slideCount-1) + 'px';

//슬라이드 이동 함수
function moveSlide(idx){
	weeklyUl.style.left = -idx * (slideWidth+slideMargin) + 'px';
	currentInx = idx;
}

//버튼으로 이동하기
nextBtn.addEventListener('click',()=>{
	if(currentInx == slideCount-4){
		moveSlide(0);
	}else{
		moveSlide(currentInx+1);
	}
});
prevBtn.addEventListener('click',()=>{
	if(currentInx == 0){
		moveSlide(slideCount-4);
	}else{
		moveSlide(currentInx-1);
	}
});
//--------------------------------------------------------------------recommend
var recomBtn1 = document.querySelector('.recomBtn1');
var recomBtn2 = document.querySelector('.recomBtn2');
var recomBtn3 = document.querySelector('.recomBtn3');
var recomBtn4 = document.querySelector('.recomBtn4');
var recomBtn5 = document.querySelector('.recomBtn5');
var recomBg = document.querySelector('.recommend_right');

recomBtn1.addEventListener('mouseover', function(){
	recomBg.style.backgroundPositionY=[0]
});
recomBtn2.addEventListener('mouseover', function(){
	recomBg.style.backgroundPositionY=[-276 + 'px']
});
recomBtn3.addEventListener('mouseover', function(){
	recomBg.style.backgroundPositionY=[-552 + 'px']
});
recomBtn4.addEventListener('mouseover', function(){
	recomBg.style.backgroundPositionY=[-830 + 'px']
});
recomBtn5.addEventListener('mouseover', function(){
	recomBg.style.backgroundPositionY=[-1106 + 'px']
});

//--------------------------------------------------------------------go-top
var btt = document.querySelector('.go-top');
var scrollAmt = 0;
let excuted = false;

window.addEventListener('scroll', ()=>{
	scrollAmt = window.pageYOffset;
	if(scrollAmt > 300){
		btt.classList.add('active');
	}else{
		btt.classList.remove('active');
	}
})

btt.addEventListener('click',(e)=>{
    e.preventDefault();

    let timer = setInterval(()=>{
        if(scrollAmt != 0){
            window.scrollBy(0,-55);
        } else{
            clearInterval(timer);
        }
    }, 10)

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
closeBtn = myPopup.querySelector('span.close'),
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

checkcookie('Manyo Factory portfolio');

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
    deleteCookie('Manyo Factory portfolio','home');
}else{ //체크되어 있을 때
    setcookie('Manyo Factory portfolio','home',1);
}
myPopup.style.display = 'none';
});