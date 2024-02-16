<template>
  <div v-if="resWidth === 'pc'">
    <div>
      <q-header elevated>
        <div class="container row justify-between">
          <router-link to="/" class="logoWrap">
            <q-avatar>
              <span class="ico logoDark">로고</span>
            </q-avatar>
          </router-link>

          <q-tabs v-model="tab">
            <q-tab name="personal" label="personal"/>
            <q-tab name="company" label="company"/>
          </q-tabs>
        </div>
      </q-header>
      <div id="navBar">
        <div class="container row justify-between">
          <router-link to="/" class="logoWrap">
            <q-avatar class="logo">
              <span class="ico logoWhite">로고</span>
            </q-avatar>
          </router-link>

          <q-tabs v-model="tab">
            <q-tab name="personal" label="personal" class="personal"/>
            <q-tab name="company" label="company" class="company"/>
          </q-tabs>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <q-header elevated>
      <q-toolbar class="justify-center">
        <router-link to="/" class="logoWrap">
          <q-avatar>
            <span class="ico logoDark">로고</span>
          </q-avatar>
        </router-link>
      </q-toolbar>
    </q-header>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn color="pink-13" icon="fa-solid fa-bars" round>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup label="personal">
              <q-item-section>personal</q-item-section>
            </q-item>
            <q-item clickable v-close-popup label="company">
              <q-item-section>company</q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-menu>
      </q-btn>
    </q-page-sticky>
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "PagesHeader",

  components: {},
  props: {
    resWidth: {
      type: String,
    },

  },
  emits: [],
  setup(props, {emit}) {
    onBeforeMount(() => {
      checkScreen();
    })
    const $router = useRouter();

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
    window.onscroll = () => {
      const qHeader = document.querySelector("header");
      const navBar = document.getElementById("navBar");
      const scrollHtml = document.querySelector("html").scrollTop;

      if (props.resWidth === "pc") {
        if (scrollHtml >= 60) {
          navBar.classList.add("active");
          qHeader.classList.add("active");
        } else {
          navBar.classList.remove("active");
          qHeader.classList.remove("active");
        }
      }
    };

    return {
      checkScreen,
      tab: ref("personal")
    };
  },
});
</script>
<style lang="scss" scoped></style>
