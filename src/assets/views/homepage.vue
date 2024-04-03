<template>
  <div class="h-screen w-screen">
    <div class="flex justify-center items-center">
      <!-- Main Content -->
    
        <div class="mb-16 lg:mt-32 xl:mt-20 xl:mr-12 px-10">
          <div
            class="bg-white rounded p-6 w-auto h-auto shadow-2xl card-animate"
          >
            <!-- Logo -->
            <div class="logo flex justify-center p-4">
              <img
                src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg"
                alt="Sample Image"
                class="w-20 h-20"
              />
            </div>
            <hp class="text-3xl mb-2 mt-4 text-primary font-bold"
              >CLIMBS Elections</hp
            >
            <br/>
            <I class="text-m mb-8 mt-6">
              Welcome to our voting app! 
            </I>
            <br>
            <i>Please select one of the following
              options:</i>
            <div class="flex justify-center items-center mt-8 ">
              <button
                type="button"
                class="text-white bg-primary hover:bg-accent w-80 md:mr-0 flex justify-center items-center"
              @click="this.$router.push('/BallotCode');">
                VOTE
              </button>
            </div>
            <div class="flex justify-center items-center mt-2">
              <button
                type="button"
                class="text-white bg-amber-400 hover:bg-primary w-80 md:mr-0 flex justify-center items-center"
                @click="this.$router.push('/InputBallotCodeforPrint');">
                SCAN & PRINT
              </button>
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
    document.querySelector('.card-animate').classList.add('fade-in');

  }
}
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
