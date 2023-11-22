<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <div class="container row justify-between">
        <q-avatar>
          logo
          <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> -->
        </q-avatar>

        <q-tabs v-model="tab">
          <q-tab name="images" label="Images" />
          <q-tab name="videos" label="Videos" />
          <q-tab name="articles" label="Articles" />
          <q-tab name="articles2" label="Articles2" />
        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
  },

  setup() {

    return {
      tab: ref('images')
    };
  },
});
</script>
