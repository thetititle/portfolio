<template>
  <q-page class="index-page">
    <main class="scrollMain column g160">
        <section id="hello">
          <div class="container">
            <article class="indexArticle">
              <h1 class="title tc">
                hello!<br>
                this is<br>
                thetititle's<br>
                portfolio<em>.</em>

              </h1>
              <p class="tc">
                This is my main works archive website.<br/>
                I hope we can have the opportunity to work together.<br/>
                Thank you. God bless you and have a beautiful day!
              </p>
            </article>
          </div>
        </section>
        <section id="project">
          <div class="container">
            <p class="tc">

            </p>
          </div>
        </section>
        <section id="thisPage">
          <div class="container">this page</div>
        </section>
        <section id="introduce">
          <div class="container">introduce</div>
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
