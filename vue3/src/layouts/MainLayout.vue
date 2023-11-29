<template>
  <q-layout>
    <q-header elevated>
      <div class="container row justify-between">
        <router-link to="/">
          <q-avatar class="logo">
            <img src="../assets/img/logo_origin_dark.png">
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="hello" label="hello"/>
          <q-tab name="project" label="project"/>
          <q-tab name="this page" label="this page"/>
          <q-tab name="introduce" label="introduce"/>
        </q-tabs>
      </div>
    </q-header>
    <div id="navBar">
      <div class="container row justify-between">
        <router-link to="/">
          <q-avatar class="logo">
            <img src="../assets/img/logo_origin_white.png">
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="hello" label="hello"/>
          <q-tab name="project" label="project"/>
          <q-tab name="this page" label="this page"/>
          <q-tab name="introduce" label="introduce"/>
        </q-tabs>
      </div>
    </div>

    <q-page-container class="index-page">
      <main class="scrollMain">
        <section id="hello">
          <div class="container">
            <h1 class="title">
              hello!<br>
              this is<br>
              thetititle's<br>
              portfolio.
            </h1>
            <p class="name">BAE SUJI 2023 PORTFOLIO</p>
          </div>
        </section>
        <section id="project">
          <div class="container">project</div>
        </section>
        <section id="thisPage">
          <div class="container">this page</div>
        </section>
        <section id="introduce">
          <div class="container">introduce</div>
        </section>
      </main>
    </q-page-container>
    <q-footer class="row">
      <q-toolbar class="container">
        <router-link to="/">
          <q-avatar class="logo">
            <img src="../assets/img/logo_origin_dark.png">
          </q-avatar>
        </router-link>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>


<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
  },

  setup() {

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
    };


  },
});
</script>
<style lang="scss" scoped>
  // 현재의 컴포넌트에만 아래의 스타일이 적용되도록 scoped 옵션을 필수로 넣는다.
  @import url(../css/index.scss);
</style>
