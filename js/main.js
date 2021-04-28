const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInput.focus();
})

searchInput.addEventListener('focus',function(){
  searchEl.classList.add('focused');  
  searchInput.setAttribute('placeholder',"통합검색");
})
// blur focus해제
searchInput.addEventListener('blur',function(){
  searchEl.classList.remove('focused');  
  searchInput.setAttribute('placeholder',"");
})

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// document html 자체
// window 브라우저 창 보고 있는 화면 자체
window.addEventListener('scroll',_.throttle(function(){
// 0.3초 단위로 
console.log("scroll")
  if(window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl,.6,{
      opacity : 0,
      display : 'none'
    });
    // 버튼 보이기 #to-top 도 가능
    gsap.to(toTopEl,.2,{
      opacity : 0,
      display : 'none'
    })  
  }else{
    // 배지 보이게
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl,.6,{
      opacity : 1,
      display : 'block'
    })
  }
  gsap.to(toTopEl,.2,{
    opacity : 1,
    display : 'block'
  })

},300));

toTopEl.addEventListener('click',function(){
  gsap.to(window,.7,{
    scrollTo : 0
  })
})
const fadeEls =document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    opacity : 1,
    delay:(index + 1) * .7
  })
});
// 생성자 class
//  new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView : 3, // 한번에 보여줄 슬라이드 수
  spaceBetween : 10,
  centeredSlides : true, // 1번 슬라이드가 
  loop : true,
  autoplay: {
    delay : 5000 // 기본값 3초
  },
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }

})

new Swiper('.awards .swiper-container',{
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
})
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide')
  }
})

function random(min,max){
  return parseFloat((Math.random()*(max - min)+min).toFixed(2))
}
function floatingObject(selector,delay,size){
  gsap.to(
    selector, // 선택자
    random(1.5,2.5), //애니메이션 동작 시간
    {
      y : size,
      repeat:-1, //반복
      yoyo:true, //애니메이션이한번진행되고 돌아오게
      delay: random(0,delay),
      ease: Power1.easeInOut
  })
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl,index){
  new ScrollMagic
      .Scene({
        triggerElement : spyEl, // 보여짐 여부를 감시할 요소를
        triggerHook : .8,   // 뷰포트 시작 0 끝 1 이 지점에 걸리면{갈고리}
      })
      .setClassToggle(spyEl,'show')
      .addTo(new ScrollMagic.Controller());
  // scene 특정한 요소를 감시하는 옵션
})

const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();

