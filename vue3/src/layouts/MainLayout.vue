<template>
  <q-layout>

    <PageHeader :resWidth="resWidth"/>

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
import PageHeader from "./PageHeader.vue"

export default defineComponent({
  name: "MainLayout",

  components: {
    PageHeader
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
      const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
      const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
      const isPc = window.matchMedia("only screen and (min-width: 1024px)").matches;
      if (isMobile) {
        resWidth.value = 'mobile';
        console.log('mobile responsive1', resWidth.value);
      } else if (isTablet) {
        resWidth.value = 'tablet';
        console.log('tablet responsive1', resWidth.value);
      } else if (isPc) {
        resWidth.value = 'pc';
        console.log('pc responsive1', resWidth.value);
      }
    };
    window.onresize = () => {
      if(window.innerWidth < 768) {
        resWidth.value = 'mobile';
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        resWidth.value = 'tablet';
      } else if (window.innerWidth > 1024) {
        resWidth.value = 'pc';
      };
    };

    return {
      resWidth,
      checkScreen
    };
  },
});
</script>
