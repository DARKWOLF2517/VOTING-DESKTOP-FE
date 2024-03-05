<template>
  <div class="h-screen w-screen "  style="background-image: url('/src/assets/images/login-bg.png'); background-size: cover; background-position: center;  margin: 0;
  padding: 0;">
    <!-- Navigation Bar -->
    <nav class="bg-primary p-2">
      <div class="container">
        <div class="flex justify-start ">
        
          <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
            class="w-10 h-10 ">
        </div>
      </div>
    </nav>
      <!-- Main Content -->
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div class="mb-16 lg:mt-32 xl:mt-20 xl:mr-12 px-10">
          <!-- Logo -->
        <div class="logo  flex justify-center">
          <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
            class="w-20 h-20">
        </div>
      
        <h1 class="h1-large mb-2 text-primary font-bold">Register</h1>
        <p class="p-large mb-8 ">Start getting things done by enetering registration code</p>
        
        <input v-model="inputText" type="text"
          class="w-full mt-4 h-10 px-4 rounded-lg border focus:outline-none focus:border-blue-500 bg-white"
          placeholder="Enter code...">
        <div class="mt-2 flex justify-end">
          <button type="button" class="text-white bg-primary hover:bg-accent w-full md:w-auto md:mr-0">Proceed</button>
        </div>
        <div class="mt-4 text-start">
            <small><b>Note:</b> All Cooperatives have their respective Registration Code, Use that to proceed here.</small>
          </div>
      </div>
      <div class="xl:text-right image-bg ">
        <img class="h-full bg-cover" src="/src/assets/images/welcome-bg.png" alt="alternative">
      </div>
    </div>
  
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  }
};
</script>

<style scoped>
/* Add Tailwind CSS classes */
</style>