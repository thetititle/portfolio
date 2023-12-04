<template>
  <q-layout>

    <PageHeader/>

    <q-page-container>
      <router-view/>
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
import { defineComponent, ref } from "vue";
import PageHeader from "./PageHeader.vue"

export default defineComponent({
  name: "MainLayout",

  components: {
    PageHeader
  },

  setup() {
    return {
    };


  },
});
</script>
