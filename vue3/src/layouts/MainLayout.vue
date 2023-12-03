<template>
  <q-layout>

    <PageHeader/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="row shadow-up-1">
      <q-toolbar class="container">
        <router-link to="/" class="logoWrap">
          <q-avatar>
            <span class="ico logoDark">로고</span>
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
