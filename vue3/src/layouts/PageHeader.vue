<template>
  <div v-if="resWidth === 'pc'">
    <div v-show="indexHeader === true">
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
    <div v-show="indexHeader === false">
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
          <q-list style="min-width: 100px" @click="moveSection($event)">
            <q-item clickable v-close-popup label="hello">
              <q-item-section>hello</q-item-section>
            </q-item>
            <q-item clickable v-close-popup label="introduce">
              <q-item-section>introduce</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup label="project">
              <q-item-section>project</q-item-section>
            </q-item>
            <q-item clickable v-close-popup label="this page">
              <q-item-section>this page</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-page-sticky>
  </div>
</template>


<script>
import { defineComponent, ref, onBeforeMount } from "vue";
export default defineComponent({
  name: "PageHeader",

  components: {
  },
  props: {
    resWidth: {
      type : String
    }
  },
  setup(props) {
    const indexHeader = ref(true);
    onBeforeMount (() => {
      if (window.location.href.includes('product')){
        indexHeader.value = false;
        console.log('indexHeader', indexHeader.value);
        // window.location.reload(true);
      } else {
        indexHeader.value = true;
        console.log('indexHeader', indexHeader.value);
        // window.location.reload(true);
      }
      // location.reload();
    });

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

      if (props.resWidth === 'pc') {
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
      indexHeader,
    };


  },
});
</script>
<style lang="scss" scoped>
</style>
