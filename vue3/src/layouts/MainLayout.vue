<template>
  <q-layout>

    <PageHeader/>

    <q-page-container>
      <router-view/>
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
