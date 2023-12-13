<template>
  <div v-if="indexHeader === true">
    <q-header elevated>
      <div class="container row justify-between">
        <router-link to="/" class="logoWrap">
          <q-avatar>
            <span class="ico logoDark">로고</span>
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="hello" label="hello"/>
          <q-tab name="introduce" label="introduce"/>
          <q-tab name="project" label="project"/>
          <q-tab name="this page" label="this page"/>
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

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="hello" label="hello"/>
          <q-tab name="introduce" label="introduce"/>
          <q-tab name="project" label="project"/>
          <q-tab name="this page" label="this page"/>
        </q-tabs>
      </div>
    </div>
  </div>
  <div v-else>
    <q-header elevated>
      <div class="container row justify-between">
        <router-link to="/" class="logoWrap">
          <q-avatar>
            <span class="ico logoDark">로고</span>
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab2" @click="moveSection($event)">
          <q-tab name="2024" label="2024"/>
          <q-tab name="before2024" label="before2024"/>
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

        <q-tabs v-model="tab2" @click="moveSection($event)">
          <q-tab name="2024" label="2024"/>
          <q-tab name="before2024" label="before2024"/>
        </q-tabs>
      </div>
    </div>
  </div>
</template>


<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "PageHeader",

  components: {
  },
  setup() {
    const indexHeader = ref(true);
    onMounted (() => {
      if (window.location.pathname === ''){
        indexHeader.value = true
        console.log('indexHeader', indexHeader.value);
      } else {
        indexHeader.value = false
        console.log('indexHeader', indexHeader.value);
      }
    })

    window.onscroll = () => {
      const qHeader = document.querySelector('header');
      const navBar = document.getElementById('navBar');
      const scrollHtml = document.querySelector('html');
      const section1 = document.querySelector('section#hello');
      const section2 = document.querySelector('section#introduce');
      const section3 = document.querySelector('section#project');
      const section4 = document.querySelector('section#thisPage');
      if (scrollHtml.scrollTop > 60) {
        navBar.classList.add('active');
        qHeader.classList.add('active');
      } else {
        navBar.classList.remove('active');
        qHeader.classList.remove('active');
      };
      // 각 섹션의 높이 가져오기
      console.log('section1, 0', section1.offsetTop)
      console.log('section1, 2', section1.scrollTop)
      // console.log('section2, 1091', section2.offsetTop)
      // console.log('section3, 1978', section3.offsetTop)
      // console.log('section4, 2829', section4.offsetTop)
      // 섹션의 높이에 도달하면 nav의 tab에 addClass q-tab--active
    }

    const moveSection = (e) => {
      const upperText = e.target.innerText;
      const lowText = upperText.toLowerCase();
      var newText = lowText.split(" ");
      for (var i = 1; i < newText.length; i++) {
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
      const selectTab = newText.join("");
      const scrollPosition = document.getElementById(selectTab).offsetTop;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }

    return {
      tab: ref('hello'),
      tab2: ref('2024'),
      moveSection,
      indexHeader
    };


  },
});
</script>
<style lang="scss" scoped>
</style>
