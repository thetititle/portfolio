<template>
  <q-layout>

    <!-- <MainHeader :resWidth="resWidth"/>
    <PagesHeader :resWidth="resWidth"/> -->

    <q-page-container>
      <router-view :resWidth="resWidth"/>
    </q-page-container>

    <q-footer class="row shadow-up-1">
      <q-toolbar class="container justify-between">
        <router-link to="/" class="logoWrap">
          <q-avatar>
            <span class="ico logoDark">로고</span>
          </q-avatar>
        </router-link>
        <q-btn flat color="pink-13" icon="fa-solid fa-at" label="CONTACT ME" href="mailto:business.thetititle@gamil.com"/>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>


<script>
import { defineComponent, ref, onBeforeMount} from "vue";
// import MainHeader from "./MainHeader.vue"
// import PagesHeader from "./PagesHeader.vue"

export default defineComponent({
  name: "MainLayout",

  components: {
    // MainHeader,
    // PagesHeader
  },
  // props:,
  // emits:
  // setup(props, {emit}) {
  setup() {
    onBeforeMount(() => {
      checkScreen();
    })

    const resWidth = ref('');
    const checkScreen = () => {
      const isMobile = window.matchMedia("only screen and (max-width: 500px)").matches;
      const isMobile2 = window.matchMedia("(min-width: 501px) and (max-width: 767px)").matches;
      const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
      const isPc = window.matchMedia("only screen and (min-width: 1024px)").matches;

      if (isMobile) {
        resWidth.value = 'mobileColumn';
      } else if (isMobile2) {
        resWidth.value = 'mobile';
      } else if (isTablet) {
        resWidth.value = 'tablet';
      } else if (isPc) {
        resWidth.value = 'pc';
      }
    };
    window.onresize = () => {
      if (window.innerWidth < 501) {
        resWidth.value = 'mobileColumn';
      } else if(window.innerWidth >= 500 && window.innerWidth == 767) {
        resWidth.value = 'mobile';
      } else if (window.innerWidth >= 768 && window.innerWidth == 1023) {
        resWidth.value = 'tablet';
      } else if (window.innerWidth >= 1024) {
        resWidth.value = 'pc';
      };
    };


    return {
      resWidth,
      checkScreen,
    };
  },
});
</script>
