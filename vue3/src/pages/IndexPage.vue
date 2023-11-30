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
          <div class="container column g160 justiy-center item-center">
            <p class="tc fontB">
              Let me introduce my self!
            </p>
            <div class="row justiy-between item-center g60">
              <article class="userInfoWrap column g30 flex1">
                <img src="../assets/img/self.png" alt="mimoticon" class="flex1">
                <ul class="userInfo column flex3">
                  <li>
                    <ul class="nameBirth column g5">
                      <li>suji bae</li>
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
              <div class="row item-center flex5">
                <article class="timeLineWrapper">
                  <p>TIME LINE</p>
                  <ul class="timeLineWrap">
                    <li>
                      <ul class="timeLine">
                        <li>NOW</li>
                        <li>Ready for NEW NEST!</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li>2023.03</li>
                        <li>화재보험협회 FIND UI/UX 개발</li>
                      </ul>
                      <ul class="timeLine">
                        <li>2023.01</li>
                        <li>화재보험협회 FIND UI/UX 디자인</li>
                      </ul>
                      <ul class="timeLine">
                        <li>2022</li>
                        <ul>
                          <li>가이랩주식회사 RPA UI/UX 디자인 및 개발</li>
                          <li>가이랩주식회사 ERP UI/UX 디자인 및 개발</li>
                          <li>가이랩주식회사 ADM UI/UX 디자인</li>
                          <li>JKG 홈페이지 UI/UX 디자인 및 개발</li>
                        </ul>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li>2022.01</li>
                        <li>가이랩주식회사 주니어 FE 입사</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li>2021.12</li>
                        <li>그린아트컴퓨터학원 React.js 수료</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="timeLine">
                        <li>2021.11</li>
                        <li>그린아트컴퓨터학원 ui/uX 퍼블리싱 프론트앤드 과정 수료</li>
                      </ul>
                    </li>
                  </ul>
                </article>
                <div class="column g30">
                  <article></article>
                  <article></article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="project">
          <div class="container">
          </div>
        </section>
        <section id="thisPage">
          <div class="container">this page</div>
        </section>
      </main>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  components: {
  },
});
</script>
<style lang="scss" scoped>
  // 현재의 컴포넌트에만 아래의 스타일이 적용되도록 scoped 옵션을 필수로 넣는다.
  @import url(../css/index.scss);
</style>
