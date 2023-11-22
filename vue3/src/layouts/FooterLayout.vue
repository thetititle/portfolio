<template>
  <!-- <q-layout>
    <q-footer class="row" elevated>
      <q-toolbar class="container">
        logo
      </q-toolbar>
    </q-footer>
  </q-layout> -->
  <q-footer class="row" elevated>
    <q-toolbar class="container">
      logo
    </q-toolbar>
  </q-footer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FooterLayout",

  components: {
  },

  setup() {

    return {
      tab: ref('images')
    };
  },
});
</script>
