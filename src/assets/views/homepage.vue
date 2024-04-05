<template>
  <title>CLIMBS</title>
  <div class="h-screen min-h-screen w-screen" id="welcome-page">
    <!-- Navigation Bar -->
    <nav class="bg-primary p-2 w-screen">
      <div class="container">
        <div class="flex justify-start">
          <img src="../images/climbs-logo.jpg" alt="CLIMBS Logo" class="w-10 h-10" />
        </div>
      </div>
    </nav>
    <div class="flex justify-center items-center">
      <!-- Main Content -->

      <div class="mb-16 lg:mt-32 xl:mt-20 xl:mr-12 px-10">
        <div class="bg-white rounded p-6 w-full h-full shadow-2xl card-animate">
          <!-- Logo -->
          <div class="logo flex justify-center p-4">
            <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
              class="w-40 h-40" />
          </div>
          <p class="text-4xl text-primary font-bold">CLIMBS Elections</p>

          <p class="text-3xl mb-2 text-primary font-bold">2024</p>
          <i class="text-lg mb-8 mt-4"> Welcome to our voting app! </i>
          <br />
          <i class="text-lg">Please select one of the following options:</i>
          <div class="flex mt-8">
            <div class="flex justify-center items-center">
              <button type="button"
                class="text-white bg-primary hover:bg-accent w-60 md:mr-0 flex justify-center items-center"
                @click="this.$router.push('/BallotCode')">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" style="margin-right: 10px" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"
                    clip-rule="evenodd" />
                  <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
                </svg>
                VOTE
              </button>
            </div>
            <p class="text-lg p-4 font-bold">OR</p>
            <div class="flex justify-center items-center">
              <button type="button"
                class="text-white bg-primary hover:bg-accent w-60 md:mr-0 flex justify-center items-center"
                @click="this.$router.push('/InputBallotCodeforPrint')">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" style="margin-right: 20px" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z"
                    clip-rule="evenodd" />
                </svg>

                SCAN & PRINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Add animation class after component is mounted
    document.querySelector(".card-animate").classList.add("fade-in");
    document.title = "CLIMBS ELECTION 2024";
    
    if (window.matchMedia('(max-width: 768px)').matches && window.matchMedia('(max-width: 576px)').matches) {
      this.$router.push('/BallotCode')
    }
  },
};
</script>
<style scoped>
/* Add Tailwind CSS classes */

.fade-in {
  animation: fadeInAnimation 1s ease-in-out forwards;
}

.fade-in-left {
  animation: fadeInLeftAnimation 1s ease-in-out forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
