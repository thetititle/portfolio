<template>
  <q-layout>
    <q-header elevated>
      <div class="container row justify-between">
        <q-avatar>
          logo
        </q-avatar>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="mails" label="mails"/>
          <q-tab name="alarms" label="alarms"/>
          <q-tab name="movies" label="movies"/>
        </q-tabs>
      </div>
    </q-header>
    <div id="navBar">
      <div class="container row justify-between">
        <q-avatar>
          logo
        </q-avatar>

        <q-tabs v-model="tab" @click="moveSection($event)">
          <q-tab name="mails" label="mails"/>
          <q-tab name="alarms" label="alarms"/>
          <q-tab name="movies" label="movies"/>
        </q-tabs>
      </div>
    </div>

    <q-page-container>
      <main class="container scrollMain">
        <section id="mails">mails</section>
        <section id="alarms">alarms</section>
        <section id="movies">movies</section>
      </main>
    </q-page-container>
    <q-footer class="row" reveal elevated>
        <q-toolbar class="container">
          logo
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
      console.log('navBar', navBar);
      const scrollHtml = document.querySelector('html');
      console.log('scrollHtml',scrollHtml.scrollTop);
      if (scrollHtml.scrollTop > 50) {
        navBar.classList.add('active');
        qHeader.classList.add('active');
        console.log('add')
      } else {
        navBar.classList.remove('active');
        qHeader.classList.remove('active');
        console.log('remove')
      }
    }

    const moveSection = (e) => {
      const upperText = e.target.innerText;
      const lowText = upperText.toLowerCase();
      const scrollPosition = document.getElementById(lowText).offsetTop;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      console.log('ddd');
    }

    return {
      tab: ref('mails'),
      moveSection,
    };


  },
});
</script>
