<template>
 
 <!-- Navigation Bar -->
   <nav class="bg-primary p-2 w-screen">
      <div class="container">
        <div class="flex justify-start ">
          <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
            class="w-10 h-10 ">
        </div>
      </div>
    </nav>

  
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