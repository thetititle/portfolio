<template>
  <q-page class="index-page">
    <PagesHeader :resWidth="resWidth"/>
    <main class="container">
      <div class="top_desc">
        <h1 class="title">Product</h1>
        <p>공부하거나 스스로 좋아서 작업한 것들을 기록해요😎</p>
        <p>왼쪽 최상단이 가장 최근 작업물이며, 역순으로 배열되었습니다.</p>
      </div>
      <article>
        <div class="productWrapper">
            <ul
              class="productWrap"
              v-for="(item, index) in productData"
              :key="index"
              @click="openWindow(item)"
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
          </div>
      </article>
    </main>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
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
    PagesHeader
  },

  setup(props) {
    onBeforeMount(() => {
      getProduct();
    });

    const productData = ref({});
    const getProduct = () => {
      api.get(`product`).then((result) => {
      // api.get(`http://thetititle.com/api/allData.json`).then((result) => {
        const data1 = result.data
        productData.value = data1.sort(function (a, b) {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
        }).slice(0,6);
        console.log('productData', productData.value);
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
      openWindow
    };
  },
});
</script>
<style lang="scss" scoped>
  @import url(../css/product.scss);
</style>
