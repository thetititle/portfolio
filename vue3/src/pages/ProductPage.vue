<template>
  <q-page class="index-page">
    <main class="scrollMain">
      <section id="2024">
        <div class="container">
          <article class="">
            2024
          </article>
        </div>
      </section>
      <section id="before2024">
        <div class="container">
          <article class="">
            before2024
          </article>
        </div>
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
  mounted() {
  },
  setup() {


    return {
    };
  }
});
</script>
<style lang="scss" scoped>
  // 현재의 컴포넌트에만 아래의 스타일이 적용되도록 scoped 옵션을 필수로 넣는다.
  @import url(../css/index.scss);
</style>
