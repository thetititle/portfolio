<template>
  <q-page class="index-page">
    <PagesHeader :resWidth="resWidth" @update:getProduct="getProduct" />
    <main class="container">
      <div class="top_desc">
        <h1 class="title">Product</h1>
        <p v-show="typeCheck === true" class="tc">
          공부하거나 스스로 좋아서 작업한 것들을 기록해요😎
        </p>
        <p v-show="typeCheck === false" class="tc">
          참여한 프로젝트를 기록해요😎
        </p>
        <p class="tc">
          왼쪽 최상단이 가장 최근 작업물이며, 역순으로 배열되었습니다.
        </p>
      </div>
      <article>
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
            <li class="pl5 pr5">
              <span>{{ item.desc }}</span>
            </li>
          </ul>
          <p></p>
        </div>
      </article>
    </main>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { api } from "boot/axios.js";
import PagesHeader from "src/layouts/PagesHeader.vue";

export default defineComponent({
  name: "PersonalProduct",
  props: {
    resWidth: {
      type: String,
    },
  },
  components: {
    PagesHeader,
  },

  setup(props) {
    onBeforeMount(() => {
      getProduct();
    });

    const typeCheck = ref(true);
    const productData = ref({});
    const getProduct = (param) => {
      console.log("param", param);
      if (param === "personal") {
        typeCheck.value = true;
      } else if (param === "company") {
        typeCheck.value = false;
      }
      api
        .get(
          `https://raw.githubusercontent.com/thetititle/data/main/archiveweb.json`
        )
        .then((result) => {
          const data1 = result.data.product.sort(function (a, b) {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
          });
          if (typeCheck.value === true) {
            productData.value = data1.filter(
              (item) => item.type === "personal"
            );
          } else if (typeCheck.value == false) {
            productData.value = data1.filter((item) => item.type === "company");
          }
        });
    };

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

    return {
      getProduct,
      productData,
      typeCheck,
      openWindow,
    };
  },
});
</script>
<style lang="scss" scoped>
@import url(../css/product.scss);
</style>
