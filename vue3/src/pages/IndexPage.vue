<template>
  <q-page class="index-page">
    <main class="scrollMain">
      <section id="hello">
        <div class="container">
          <article class="indexArticle">
            <h1 class="title tc">
              hello!<br>
              this is<br>
              thetititle's<br>
              portfolio<em>.</em>

            </h1>
            <p class="desc tc">
              This is my main works archive website.<br/>
              I hope we can have the opportunity to work together.<br/>
              Thank you. God bless you and have a beautiful day :)
            </p>
          </article>
        </div>
      </section>
      <section id="introduce">
        <div class="container column g160 justify-center item-center">
          <p class="tc fontB">
            Let me introduce my self!
          </p>
          <div class="row justify-between item-center g60">
            <article class="userInfoWrap column g30 flex1">
              <img src="../assets/img/self.png" alt="mimoticon" class="flex1">
              <ul class="userInfo column justify-between flex3">
                <li>
                  <ul class="nameBirth column g5">
                    <li class="conTt">suji bae</li>
                    <li>배수지</li>
                    <li>1990.01.09</li>
                  </ul>
                </li>
                <li>
                  <ul class="column g10">
                    <li>
                      <ul class="phone">
                        <li class="fontEB">Phone.</li>
                        <li>010-8316-2942</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="eAdd">
                        <li class="fontEB">Email.</li>
                        <li>business.thetititle@gmail.com</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="hAdd">
                        <li class="fontEB">Based in.</li>
                        <li>Seoul, Korea</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
            <div class="articleWrap row item-center g30 flex5">
              <article class="timeLineWrapper column g10">
                <p class="conTt">TIME LINE</p>
                <div class="timeLineWrap flex1">
                  <ul class="timeLines">
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span><em>NOW</em></span></li>
                        <li>Ready for NEW NEST!</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2023.10</span></li>
                        <li>공무원연금공단 연금수급권 확인서비스 퍼블리싱</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2023.08</span></li>
                        <li>통일부 퍼블리싱</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2023.03</span></li>
                        <li>화재보험협회 FIND UI/UX 개발</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2023.01</span></li>
                        <li>화재보험협회 FIND UI/UX 디자인</li>
                      </ul>
                    </li>
                    <li>
                      <q-tooltip anchor="center end" self="top right" :offset="[0,0]">
                        ❗ISSUE <br/>
                        project가 단일 branch로 이루어져 있어서 고객사GA들의 니즈를 맞출 수 없었음<br/>
                        ex) design, data...<br/>
                        <br/>
                        ❕SOLUTION<br/>
                        모든 data와 style이 하나로 뭉쳐져 있는 상태로 배포가 되어있는 상태였고<br/>
                        시니어와 사수가 없는 상태에서 주니어인 본인이 할 수 있는 최선의 방법은<br/>
                        1, Mount하거나 reat할 때 url을 가져온 후<br/>
                        2, 각GA의 인식자가 url에 포함이 되면, 해당 GA가 원하는 style과 data를 보여줌<br/>
                        <br/>
                        👉🏻1년도 안된 주니어가 할 수 있는 최선의 선택이었고, 고객사들의 needs는 충족됨.
                      </q-tooltip>
                      <ul class="timeLine">
                        <li class="fontB"><span>2022~</span></li>
                        <ul>
                          <li>가이랩주식회사 RPA UI/UX 디자인 및 개발</li>
                          <li>가이랩주식회사 ERP UI/UX 디자인 및 개발</li>
                          <li>가이랩주식회사 ADM UI/UX 디자인</li>
                        </ul>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2022.01</span></li>
                        <li>가이랩주식회사 주니어 FE 입사</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2021.12</span></li>
                        <li>그린아트컴퓨터학원 React.js 수료</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2021.11</span></li>
                        <li>그린아트컴퓨터학원 UI/UX 퍼블리싱 프론트앤드 과정 수료</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </article>
              <div class="column g30 flex1">
                <article class="skills column g10">
                  <p class="conTt">SKILLS</p>
                  <img src="../assets/img/skills.png" alt="스킬">
                </article>
                <article class="links column g10">
                  <p class="conTt">LINKS</p>
                  <span>Please visit this link for more information about me!</span>
                  <div class="q-gutter-sm">
                    <q-btn flat color="black" icon="fa-brands fa-github" label="github" target="blank" href="https://github.com/thetititle"/>
                    <q-btn flat color="secondary" icon="fa-solid fa-code" label="velog" target="blank" href="https://velog.io/@thetitle"/>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div class="container">
          <p class="tc fontB">
            and Now i show you my products.🖤
          </p>
          <article class="slideWrap">
            <div class="row no-wrap items-end">
              <!-- <router-link to="/product">
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[0, 0]">
                  IF YOU WANT SEE MORE,<br>
                  CLICK ME✨
                </q-tooltip>
                <img src="../assets/img/title_project_col.png" alt="project" class="projectSection">
              </router-link> -->
              <img src="../assets/img/title_project_col.png" alt="project" class="projectSection">
              <div class="btnWrap">
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[0, 0]">
                  SORRY, WAIT PLZ🖤 <br>
                  IT'S NOT WORKING YET
                </q-tooltip>
                <q-btn unelevated round color="pink-13" icon="fa-solid fa-angle-left" id="btnNext" @click="swiper.slideNext()"/>
                <q-btn unelevated round color="pink-13" icon="fa-solid fa-angle-right" id="btnPrev" @click="swiper.slidePrev()"/>
              </div>
            </div>
            <swiper
              id="swipers"
              :slides-per-view="3.5"
              :space-between="20"
              @swiper="onSwiper"
            >
              <swiper-slide @click="openWindow('react')">
                <q-tooltip class="bg-light-green-1 text-grey-10 tc" anchor="top middle" self="bottom middle" :offset="[0, -100]">
                  GET READY FOR PRESENTATION<br>
                  RESPONSIVE<br>
                  💙USING NEXT.JS & TYPE SCRIPT💙
                </q-tooltip>
                <img src="../assets/img/23_design.jpg" alt="23_design">
              </swiper-slide>
              <swiper-slide @click="openWindow('aestetic')">
                <q-tooltip class="bg-light-green-1 text-grey-10 tc" anchor="top middle" self="bottom middle" :offset="[0, -100]">
                  MADE IN 2023<br>
                  PC<br>
                  USED HTML,CSS,JAVASCRIPT
                </q-tooltip>
                <img src="../assets/img/23_aestetic.jpg" alt="23_aestetic">
              </swiper-slide>
              <swiper-slide @click="openWindow('knotted')">
                <q-tooltip class="bg-light-green-1 text-grey-10 tc" anchor="top middle" self="bottom middle" :offset="[0, -100]">
                  MADE IN 2021<br>
                  MOBILE<br>
                  USED HTML,CSS,J-QUERY
                </q-tooltip>
                <img src="../assets/img/21_knotted.jpg" alt="21_knotted">
              </swiper-slide>
              <swiper-slide @click="openWindow('manyo')">
                <q-tooltip class="bg-light-green-1 text-grey-10 tc" anchor="top middle" self="bottom middle" :offset="[0, -100]">
                  MADE IN 2021<br>
                  PC<br>
                  USED HTML,CSS,JAVASCRIPT
                </q-tooltip>
                <img src="../assets/img/21_manyo.jpg" alt="21_manyo">
              </swiper-slide>
            </swiper>
          </article>
        </div>
      </section>
      <section id="thisPage">
        <div class="container column g160 justify-center item-center">
          <p class="tc fontB">
            This is a summary description for this page.
          </p>
          <div class="row no-wrap g40">
            <div class="flex1 imgWrap">
              <img src="../assets/img/localhost_8080_.png" alt="localhost">
            </div>
            <div class="flex1 column g15 mAbsolute">
              <h1 class="title">
                This Page<em>.</em>
              </h1>
              <ul class="list_desc">
                <li>▪Responsive</li>
                <li>
                  <ul class="descs">
                    <li>@media</li>
                    <li>(min-width:768px) and (max-width: 1023px)</li>
                    <li>all and (max-width: 767px)</li>
                  </ul>
                </li>
              </ul>
              <ul class="list_desc">
                <li>▪Data</li>
                <li>
                  <ul class="descs">
                    <li>simple server used json</li>
                  </ul>
                </li>
              </ul>
              <p class="mt20">아래 링크를 통해 피그마 디자인과 깃헙 리포지토리를 방문할 수 있습니다.</p>
              <div class="q-gutter-sm mb20">
                <q-btn flat color="pink-13" icon="fa-brands fa-figma" label="FIGMA" target="blank" href="https://www.figma.com/file/BppUrWJDWioiMDQ3XMWiPh/framework-ver?type=design&node-id=16%3A56&mode=design&t=5NoGOyxB9vPfutVu-1"/>
                <q-btn flat color="black" icon="fa-brands fa-github" label="github" target="blank" href="https://github.com/thetititle"/>
              </div>
              <article class="timeLineWrapper column g10">
                <p class="conTt">📌Issue check list</p>
                <div class="timeLineWrap flex1">
                  <ul class="timeLines">
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span><em>NOW</em></span></li>
                        <li>Creat NEXT.js ver using Typescript</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2024.01.17</span></li>
                        <li>Responsive CLEAR</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li class="fontB"><span>2023.12.15</span></li>
                        <li>Nav scroll Event issue CLEAR</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine yet">
                        <li class="fontB"><span>PRE</span></li>
                        <li>Product manyo_21 CSS Broken issue</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine yet">
                        <li class="fontB"><span>PRE</span></li>
                        <li>Swiper Initialize issue in VUE3 CHECKING</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </article>
              <hr>
            </div>
          </div>
        </div>
      </section>
    </main>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default defineComponent({
  name: "IndexPage",
  props: {
    resWidth: {
      type : String
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    // this.setSlideWidth();
  },
  // computed() {
  //   const Swiper = new Swiper('.swiper', {
  //     navigation: {
  //       nextEl: document.querySelector('#btnNext'),
  //       prevEl: document.querySelector('#btnPrev'),
  //     },
  //   });
  // },
  setup(props) {
    // const swiper = useSwiper();

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    // const setSlideWidth = () => {
    //   const slides = document.querySelectorAll('.swiper-slide');
    //   var slideWrap = document.querySelector('.swiper-wrapper');
    //   const slideWidth = 285;
    //   const slideCount = slides.length;

    //   for (var i = 0; i < slideCount; i++){
    //     var slideAllWidth = slides[i].style.width = slideWidth + 'px';
    //   }
    //   slideWrap = slideAllWidth;
    // };

    const openWindow = (e) => {
      if (e === 'react'){
        console.log('react')
        alert('준비중이에요!')
      } else if ( e === 'aestetic') {
        console.log('aestetic')
        window.open("http://thetititle.com/products/aestetic_23/index.html","blank");
      } else if ( e === 'manyo') {
        console.log('manyo')
        window.open("http://thetititle.com/products/manyo_21/index.html/","blank");
      } else if ( e === 'knotted') {
        console.log('knotted')
        window.open("http://thetititle.com/products/knotted_21/index.html","blank");
      }
    };

    // if(props.resWidth === 'mobile') {

    // }


    return {
      // swiper,
      // setSlideWidth,
      onSwiper,
      openWindow
      // onSlideChange,
    };
  }
});
</script>
<style lang="scss" scoped>
  // 현재의 컴포넌트에만 아래의 스타일이 적용되도록 scoped 옵션을 필수로 넣는다.
  @import url(../css/index.scss);
</style>
