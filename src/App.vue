<template>
 

  
  <router-view />
  
</template>

<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  mounted() {
    // console.log(import.meta.env.VITE_APP_BASE_URL);
  },
});
</script>

<style>

</style>