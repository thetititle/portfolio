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
          <q-tab name="hello" label="hello" class="hello"/>
          <q-tab name="introduce" label="introduce" class="introduce"/>
          <q-tab name="project" label="project" class="project"/>
          <q-tab name="this page" label="this page" class="thisPage"/>
        </q-tabs>
      </div>
    </div>
  </div>
  <div v-else-if="indexHeader === false">
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
      if (window.location.href.includes('/product')){
        indexHeader.value = false
        console.log('indexHeader', indexHeader.value);
        // window.location.reload(true);
      } else {
        indexHeader.value = true
        console.log('indexHeader', indexHeader.value);
        // window.location.reload(true);
      }
      // location.reload();
    })

    window.onscroll = () => {
      const qHeader = document.querySelector('header');
      const navBar = document.getElementById('navBar');
      const scrollHtml = document.querySelector('html').scrollTop;

      const section1 = document.querySelector('section#hello').offsetTop;
      const section2 = document.querySelector('section#introduce').offsetTop;
      const section3 = document.querySelector('section#project').offsetTop;
      const section4 = document.querySelector('section#thisPage').offsetTop;
      const tabIntroduce = document.querySelector('.q-tab.introduce');
      const tabProject = document.querySelector('.q-tab.project');
      const tabThisPage = document.querySelector('.q-tab.thisPage');

      if (scrollHtml >= 60 ) {
        navBar.classList.add('active');
        qHeader.classList.add('active');
        if (scrollHtml > section2 && scrollHtml < section3) {
          tabIntroduce.classList.add('q-tab--active');
          tabIntroduce.previousSibling.classList.remove('q-tab--active');
          tabIntroduce.nextSibling.classList.remove('q-tab--active');
          tabIntroduce.previousSibling.classList.add('q-tab--inactive');
          tabIntroduce.nextSibling.classList.add('q-tab--inactive');
        } else if (scrollHtml > section3 && scrollHtml < section4) {
          tabProject.classList.add('q-tab--active');
          tabProject.previousSibling.classList.remove('q-tab--active');
          tabProject.nextSibling.classList.remove('q-tab--active');
          tabProject.previousSibling.classList.add('q-tab--inactive');
          tabProject.nextSibling.classList.add('q-tab--inactive');
        } else if (scrollHtml > section4 && scrollHtml > section3) {
          tabThisPage.classList.add('q-tab--active');
          tabThisPage.previousSibling.classList.remove('q-tab--active');
          tabThisPage.previousSibling.classList.add('q-tab--inactive');
        };
      } else {
        navBar.classList.remove('active');
        qHeader.classList.remove('active');
      };
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
