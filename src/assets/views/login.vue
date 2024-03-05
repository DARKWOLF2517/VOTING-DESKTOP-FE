<template>
    <div class="h-screen w-screen">
      <!-- Navigation Bar -->
      <nav class="bg-primary ml-0">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <!-- Logo -->
            <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image" class="w-10 h-10">
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <div class="flex flex-col justify-center items-center mt-8">
        <!-- Card Container -->
        <div class="rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row justify-center md:justify-between">
          <!-- Container 1: Sample Image -->
          <div class="mb-4 md:mb-0 md:mr-4">
            <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image" class="w-full md:w-96 h-96 object-cover">
          </div>
  
          <!-- Container 2: Input Text -->
          <div class="p-4 w-full md:w-80">
            <p class="text-5xl mt-6 font-bold text-start text-primary">Register</p>
            <p class="text-start mt-2">Please Input Registration Code</p>
            <input v-model="inputText" type="text" class="w-full mt-6 h-10 px-4 rounded-lg border focus:outline-none focus:border-blue-500 bg-gray-200" placeholder="Enter text...">
            <div class="mt-2 flex justify-end">
              <button type="button" class="text-white bg-primary hover:bg-accent w-full md:w-auto md:mr-0">Proceed</button>
            </div>
            <div class="">
              <small><b>Note:</b> All Cooperatives have their respective Registration Code, Use that to proceed here.</small>
            </div>
          </div>
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
  