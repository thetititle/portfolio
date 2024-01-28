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
            <ul class="desc tc">
              <li>This is my main works archive website.</li>
              <li>I hope we can have the opportunity to work together.</li>
              <li>God bless you and have a beautiful day :)</li>
            </ul>
          </article>
        </div>
      </section>
      <section id="introduce">
        <div class="container">
          <p class="tc fontB">
            Let me introduce my self!
          </p>
          <div class="userInfoWrapper g60">
            <article class="userInfoWrap g30">
              <img src="../assets/img/self.png" alt="mimoticon" class="flex1">
              <ul class="userInfo column justify-between flex2" id="userInfo">
                <li>
                  <ul class="nameBirth column g5">
                    <li class="conTt">{{ownerInfo.enName}}</li>
                    <li>{{ownerInfo.koName}}</li>
                    <li>{{ownerInfo.birthDay}}</li>
                  </ul>
                </li>
                <li>
                  <ul class="column g10">
                    <li>
                      <ul class="phone">
                        <li class="fontEB">Phone.</li>
                        <li>{{ownerInfo.phoneNum}}</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="eAdd">
                        <li class="fontEB">Email.</li>
                        <li>{{ownerInfo.emailAdd}}</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="hAdd">
                        <li class="fontEB">Based in.</li>
                        <li>{{ownerInfo.baseAdd}}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
            <div class="articleWrap g30" id="articleWrap">
              <article class="timeLineWrapper column g10 flex1">
                <p class="conTt">⏰TIME LINE</p>
                <div class="timeLineWrap items-center flex1">
                  <ul class="timeLines">
                    <li>
                      <ul class="timeLine" v-for="(item, index) in timeLine" :key="index">
                        <li class="fontB"><span :class="item.date === 'NOW' ? 'fHighlight' : ''">{{ item.date }}</span></li>
                        <li>
                          <ul v-for="(item, index) in item.desc" :key="index">
                            <li>{{ item }}</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <!-- <q-tooltip anchor="center end" self="top right" :offset="[0,0]">
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
                  </q-tooltip> -->
                </div>
              </article>
              <div class="column g30 flex1">
                <article class="skills column g10">
                  <p class="conTt">🎮SKILLS</p>
                  <img src="../assets/img/skills.png" alt="스킬">
                </article>
                <article class="links column g10">
                  <p class="conTt">🔗LINKS</p>
                  <span>Please visit this link for more information about me!</span>
                  <div class="q-gutter-sm">
                    <q-btn flat color="black" icon="fa-brands fa-github" label="github" target="blank" :href="ownerInfo.gitHub"/>
                    <q-btn flat color="secondary" icon="fa-solid fa-code" label="velog" target="blank" :href="ownerInfo.veLog"/>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div class="container">
          <article>
            <div class="column">
              <p>and Now i show you my products.🖤</p>
              <h1 class="title">Product</h1>
            </div>
            <div class="productWrapper">
              <ul class="productWrap" v-for="(item, index) in productData" :key="index" @click="openWindow(item)" data-aos="fade-up">
                <li>
                  <img :src="item.imgUrl" alt="포트폴리오">
                </li>
                <li class="fontEB"><p>{{item.title}}</p></li>
                <li class="row g10">
                  <ul v-for="(item, index) in item.skills" :key="index">
                    <li>{{ item }}</li>
                  </ul>
                </li>
                <li><span>{{item.desc}}</span></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section id="thisPage">
        <div class="container column g160 justify-center items-center">
          <p class="tc fontB">
            This is a summary description for this page.
          </p>
          <div class="pageWrapper no-wrap g40 mb90">
            <div class="imgWrap">
              <img src="../assets/img/localhost_8080_.png" alt="localhost">
            </div>
            <div class="descWrap g15">
              <h1 class="title">
                This Page<em>.</em>
              </h1>
              <ul class="list_desc">
                <li class="fontB">Responsive</li>
                <li>
                  <ul class="descs">
                    <li>@media</li>
                    <li>(max-width: 320px)</li>
                    <li>(min-width: 321px) and (max-width: 500px)</li>
                    <li>(min-width: 501px) and (max-width: 768px)</li>
                    <li>(min-width: 769px) and (max-width: 1024px)</li>
                  </ul>
                </li>
              </ul>
              <ul class="list_desc">
                <li class="fontB">Data</li>
                <li>
                  <ul class="descs">
                    <li>json (console 확인가능)</li>
                  </ul>
                </li>
              </ul>
              <p class="mt20">아래 링크를 통해 피그마 디자인과 깃헙 리포지토리를 방문할 수 있습니다.</p>
              <div class="q-gutter-sm mb20">
                <q-btn flat color="pink-13" icon="fa-brands fa-figma" label="FIGMA" target="blank" :href="ownerInfo.figma"/>
                <q-btn flat color="black" icon="fa-brands fa-github" label="github" target="blank" :href="ownerInfo.gitHub"/>
              </div>
              <article class="timeLineWrapper column g10">
                <p class="conTt">📌Issue check list</p>
                <div class="timeLineWrap flex1">
                  <ul class="timeLines">
                    <li>
                      <ul class="timeLine" v-for="(item, index) in issueCheck" :key="index">
                        <li class="fontB"><span :class="item.complate === 'NOW'? 'fHighlight' : ''|| item.complate === 'PRE'? 'fblur' : ''">{{item.complate}}</span></li>
                        <li>{{item.desc}} </li>
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
import { defineComponent, onBeforeMount, onMounted, ref} from "vue";
import { api } from "boot/axios.js";

export default defineComponent({
  name: "IndexPage",
  props: {
    resWidth: {
      type : String
    }
  },
  components: {
  },

  setup(props) {
    onBeforeMount(() => {
      getData();
    });

    const openWindow = (e) => {
      const windowUrl = e.href
      if (windowUrl.includes('#1')){
        alert('준비중이에요!')
      } else if (windowUrl.includes('manyo')) {
        window.open(windowUrl,"blank");
      } else if (windowUrl.includes('knotted')) {
        window.open(windowUrl,"blank");
      } else if (windowUrl.includes('vue3'))  {
        // window.open(windowUrl,"blank");
        alert('현재 보고계시는 페이지에요!')
      }
      console.log('window.location', window.location.href)
    };

    const ownerInfo = ref({});
    const timeLine = ref({});
    const timeDesc = ref([]);
    const issueCheck = ref({});
    const productData = ref({});
    const getData = () => {
      // api.get(`allData`).then((result) => {
      //   ownerInfo.value = result.data[0].ownerInfo
      //   timeLine.value = result.data[0].timeLine.sort(function(a,b) {
      //     if (a.id < b.id) return 1;
      //     if (a.id > b.id) return -1;
      //   });
      //   issueCheck.value = result.data[0].issueCheck
      //   productData.value = result.data[0].product.sort(function(a,b) {
      //     if (a.id < b.id) return 1;
      //     if (a.id > b.id) return -1;
      //   });
      //   console.log('timeLine.value',timeLine.value)
      // });
      api.get(`http://thetititle.com/api/allData.json`).then((result) => {
        const data1 = result.data.allData[0];
        ownerInfo.value = data1.ownerInfo;
        timeLine.value = data1.timeLine.sort(function(a,b) {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
        });
        issueCheck.value = data1.issueCheck;
        productData.value = data1.product.sort(function(a,b) {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
        });
        console.log('allData', data1);
        console.log('ownerInfo', ownerInfo.value);
        console.log('timeLine', timeLine.value);
        console.log('issueCheck', issueCheck.value);
        console.log('productData', productData.value);
      });
    };


    return {
      openWindow,
      // resWidth2,
      getData,
      ownerInfo,
      timeLine,
      timeDesc,
      issueCheck,
      productData
    };
  }
});
</script>
<style lang="scss" scoped>
  // 현재의 컴포넌트에만 아래의 스타일이 적용되도록 scoped 옵션을 필수로 넣는다.
  @import url(../css/index.scss);
</style>
