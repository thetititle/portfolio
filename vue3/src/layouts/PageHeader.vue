<template>
  <div v-if="indexHeader = true">
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
    <p>nav에 대한 고민...</p>
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
      if (window.location.pathname === '/'){
        indexHeader.value = true
      } else {
        indexHeader.value = false
      }
      console.log('indexHeader', indexHeader.value)
    })

    window.onscroll = () => {
      const qHeader = document.querySelector('header');
      const navBar = document.getElementById('navBar');
      const scrollHtml = document.querySelector('html');
      if (scrollHtml.scrollTop > 60) {
        navBar.classList.add('active');
        qHeader.classList.add('active');
      } else {
        navBar.classList.remove('active');
        qHeader.classList.remove('active');
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
      moveSection,
      indexHeader
    };


  },
});
</script>
<style lang="scss" scoped>
</style>
