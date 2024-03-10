<template>
  <q-page class="index-page">
    <MainHeader :resWidth="resWidth" />
    <main class="scrollMain">
      <section id="hello">
        <div class="container">
          <article class="indexArticle">
            <h1 class="title tc">
              hello!<br />
              this is<br />
              thetititle's<br />
              portfolio<em>.</em>
            </h1>
            <em>used QARSAR</em>
            <ul class="desc tc">
              <li>This is my main works archive website.</li>
              <li>I hope we can have the opportunity to work together.</li>
              <li>God bless you and have a beautiful day :)</li>
            </ul>
          </article>
        </div>
      </section>
      <p class="tc fontB">Let me introduce my self!</p>
      <section id="introduce">
        <div class="container">
          <div class="userInfoWrapper g60">
            <article class="userInfoWrap g30">
              <img src="../assets/img/self.png" alt="mimoticon" class="flex1" />
              <ul class="userInfo column justify-between flex2" id="userInfo">
                <li>
                  <ul class="nameBirth column g5">
                    <li class="conTt">{{ ownerInfo.enName }}</li>
                    <li>{{ ownerInfo.koName }}</li>
                    <li>{{ ownerInfo.birthDay }}</li>
                  </ul>
                </li>
                <li>
                  <ul class="column g10">
                    <li>
                      <ul class="phone">
                        <li class="fontEB">Phone.</li>
                        <li>{{ ownerInfo.phoneNum }}</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="eAdd">
                        <li class="fontEB">Email.</li>
                        <li>{{ ownerInfo.emailAdd }}</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="hAdd">
                        <li class="fontEB">Based in.</li>
                        <li>{{ ownerInfo.baseAdd }}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
            <div class="articleWrap g30" id="articleWrap">
              <div class="column g30 flex1">
                <article class="timeLineWrapper column g10 flex1">
                  <p class="conTt">⏰TIME LINE</p>
                  <div class="timeLineWrap items-center flex1">
                    <div class="timeLines">
                      <ul
                        class="timeLine"
                        v-for="(item, index) in timeLine"
                        :key="index"
                      >
                        <li class="fontB">
                          <span
                            :class="item.date === 'NOW' ? 'fHighlight' : ''"
                            >{{ item.date }}</span
                          >
                        </li>
                        <li>
                          <ul v-for="(item, index) in item.desc" :key="index">
                            <li>{{ item }}</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div class="column g30 flex1">
                <article class="skills column g10">
                  <p class="conTt">🎮SKILLS</p>
                  <div class="sillsWrap row g10">
                    <ul v-for="(item, index) in skills" :key="index">
                      <li><img :src="item.imgUrl" :alt="item.name" /></li>
                    </ul>
                  </div>
                </article>
                <article class="links column g10">
                  <p class="conTt">🔗LINKS</p>
                  <span
                    >Please visit this link for more information about me!</span
                  >
                  <div class="q-gutter-sm">
                    <q-btn
                      flat
                      color="black"
                      icon="fa-brands fa-github"
                      label="github"
                      target="blank"
                      :href="ownerInfo.gitHub"
                    />
                    <q-btn
                      flat
                      color="secondary"
                      icon="fa-solid fa-code"
                      label="velog"
                      target="blank"
                      :href="ownerInfo.veLog"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p class="tc fontB">and Now i show you my products.🖤</p>
      <section id="project">
        <div class="container">
          <article>
            <div class="column">
              <router-link to="/product">
                <h1 class="title">Product</h1>
                <p>💡더 많은 product를 보고싶다면 click!✨</p>
              </router-link>
            </div>
            <div class="productWrapper">
              <ul
                class="productWrap"
                v-for="(item, index) in productData"
                :key="index"
                @click="openWindow(item)"
                data-aos="fade-up"
              >
                <li>
                  <img :src="item.imgUrl" alt="포트폴리오" />
                </li>
                <li class="fontEB row justify-between pl5 pr5">
                  <p>{{ item.title }}</p>
                  <p>{{ item.year }}</p>
                </li>
                <li class="row g10 pl5 pr5">
                  <ul v-for="(item, index) in item.skills" :key="index">
                    <li>{{ item }}</li>
                  </ul>
                </li>
                <li class="pl5 pr5 tl">
                  <span>{{ item.desc }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <p class="tc fontB">This is a summary description for this page.</p>
      <section id="thisPage">
        <div class="container column g160 justify-center items-center">
          <div class="pageWrapper no-wrap g40 mb90">
            <div class="imgWrap">
              <img src="../assets/img/localhost_8080_.png" alt="localhost" />
            </div>
            <div class="descWrap g15">
              <h1 class="title">This Page<em>.</em></h1>
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
              <p class="mt20">
                아래 링크를 통해 피그마 디자인과 깃헙 리포지토리를 방문할 수
                있습니다.
              </p>
              <div class="q-gutter-sm mb20">
                <q-btn
                  flat
                  color="pink-13"
                  icon="fa-brands fa-figma"
                  label="FIGMA"
                  target="blank"
                  :href="ownerInfo.figma"
                />
                <q-btn
                  flat
                  color="black"
                  icon="fa-brands fa-github"
                  label="github"
                  target="blank"
                  :href="ownerInfo.gitHub"
                />
              </div>
              <article class="timeLineWrapper column g10">
                <p class="conTt">📌Issue check list</p>
                <div class="timeLineWrap flex1">
                  <div class="timeLines">
                    <ul
                      class="timeLine"
                      v-for="(item, index) in IssueCheck"
                      :key="index"
                    >
                      <li class="fontB">
                        <span
                          :class="
                            item.complate === 'NOW'
                              ? 'fHighlight'
                              : '' || item.complate === 'PRE'
                              ? 'fblur'
                              : ''
                          "
                          >{{ item.complate }}</span
                        >
                      </li>
                      <li>{{ item.desc }}</li>
                    </ul>
                  </div>
                </div>
              </article>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </main>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { api } from "boot/axios.js";
import MainHeader from "../layouts/MainHeader.vue";

export default defineComponent({
  name: "IndexPage",
  props: {
    resWidth: {
      type: String,
    },
  },
  components: {
    MainHeader,
  },

  setup(props) {
    onBeforeMount(() => {
      getData();
      getProduct();
    });

    const openWindow = (e) => {
      const windowUrl = e.href;
      if (windowUrl.includes("#")) {
        alert("준비중 이에요!");
      } else if (windowUrl.includes("knotted")) {
        var userAgent = navigator.userAgent;
        var isMobile = userAgent.match(
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        );
        if ((userAgent = isMobile)) {
          alert("PC에서 볼 수 있어요!");
        } else {
          window.open(windowUrl, "blank");
        }
      } else if (windowUrl.includes("quasar")) {
        alert("현재 페이지에요!");
      } else {
        window.open(windowUrl, "blank");
      }
    };

    const ownerInfo = ref({});
    const skills = ref([]);
    const timeLine = ref({});
    const timeDesc = ref([]);
    const IssueCheck = ref([]);
    const productData = ref({});
    const getData = () => {
      api
        .get(
          `https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json`
        )
        .then((result) => {
          const data1 = result.data.allData[0];
          ownerInfo.value = data1.ownerInfo;
          skills.value = ownerInfo.value.skills;
          timeLine.value = data1.timeLine.sort(function (a, b) {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
          });
          console.log("ownerInfo", ownerInfo.value);
          console.log("timeLine", timeLine.value);
        });
    };
    const getProduct = () => {
      api
        .get(
          `https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json`
        )
        .then((result) => {
          const data1 = result.data.product;
          productData.value = data1
            .sort(function (a, b) {
              if (a.id < b.id) return 1;
              if (a.id > b.id) return -1;
            })
            .slice(0, 6);
          const data2 = data1.filter((item) => item.id === "4")[0].issueCheck;
          IssueCheck.value = data2.sort(function (a, b) {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
          });
          console.log("productData", productData.value);
          console.log("IssueCheck", IssueCheck.value);
        });
    };

    return {
      openWindow,
      getData,
      getProduct,
      ownerInfo,
      skills,
      timeLine,
      timeDesc,
      productData,
      IssueCheck,
    };
  },
});
</script>
<style lang="scss" scoped>
@import url(../css/index.scss);
</style>
