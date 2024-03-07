<template>
  <div class="h-screen w-screen">
    <!-- Navigation Bar -->
    <nav class="bg-primary p-2">
      <div class="container">
        <div class="flex justify-start ">
          <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
            class="w-10 h-10 ">
        </div>
      </div>
    </nav>
    <div class="flex justify-center items-center">
      <!-- Main Content -->
      <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="xl:text-right image-bg image-animate">
          <img class="h-full w-full bg-cover" src="/src/assets/images/user-select.png" alt="alternative">
        </div>
        <div class="mb-16 lg:mt-32 xl:mt-20 xl:mr-12 px-10 card-animate">
          <div class="bg-white rounded-lg p-6 h-full shadow-2xl">
            <h1 class="h1-large mb-2 mt-12 text-primary font-bold">Who's using?</h1>
            <p class="p-large mb-12">Choose your name to cast your vote</p>
            <form class="mx-auto w-full">
              <label for="countries" class="block mb-2 text-sm font-bold text-primary text-start">Select your
                name</label>
              <select  v-model="delegateId" id="countries"
                class="text-sm focus:ring-blue-500 block w-full p-2.5 rounded-lg border focus:outline-none border-blue-200 bg-gray-100 dark:placeholder-gray-400  focus:border-blue-500">
                <option :value="delegates['id']" v-for="delegates in  delegate" :key="delegates['id']">{{ delegates['fullname'] }}</option>
              </select>
            </form>
            <div class="mt-4 flex justify-end">
              <button @click="checkName()" type="button"
                class="text-white bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center">
                Submit
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data() {
    return {
      baseUrl: import.meta.env.VITE_APP_BASE_URL,
      coopId : sessionStorage.getItem("coopid"),
      delegate: [],
      delegateId: "",
    };
  },
  mounted() {
    // Add animation class after component is mounted
    document.querySelector('.card-animate').classList.add('fade-in-left');
    document.querySelector('.image-animate').classList.add('fade-in');


    this.fetchDelegates();
  },
  methods: {
    //to get the delegate fullname
    async fetchDelegates() {
      try {
        const getDeligates = await axios.get(this.baseUrl + 'api/getDelegates/' + this.coopId);
        this.delegate = getDeligates.data;
        console.log(this.delegate)

      } catch (error) {
        console.log(error);
      }
    },

    checkName() {
      if (this.delegateId) {
        console.log('naay sulod and id');
        sessionStorage.setItem("delegateid", this.delegateId);
        window.location.href = '/ballotcode';
      }
    },
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

@keyframes fadeInLeftAnimation {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>