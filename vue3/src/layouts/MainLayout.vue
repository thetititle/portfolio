<template>
  <q-layout>
    <q-header elevated>
      <div class="container row justify-between">
        <router-link to="/">
          <q-avatar class="logo">
            <img src="../assets/img/logo_origin_white.png">
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="project" label="project"/>
          <q-tab name="about this page" label="about this page"/>
          <q-tab name="introduce" label="introduce"/>
        </q-tabs>
      </div>
    </q-header>
    <div id="navBar">
      <div class="container row justify-between">
        <router-link to="/">
          <q-avatar class="logo">
            <img src="../assets/img/logo_origin_dark.png">
          </q-avatar>
        </router-link>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="project" label="project"/>
          <q-tab name="about this page" label="about this page"/>
          <q-tab name="introduce" label="introduce"/>
        </q-tabs>
      </div>
    </div>

    <q-page-container class="index-page">
      <main class="scrollMain">
        <section id="project">
          <div class="container">project</div>
        </section>
        <section id="about this page">
          <div class="container">about this page</div>
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
      const scrollPosition = document.getElementById(lowText).offsetTop;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }

    return {
      tab: ref('mails'),
      moveSection,
    };


  },
});
</script>
