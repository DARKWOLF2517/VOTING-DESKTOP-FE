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
        <div class="mb-16 lg:mt-32 xl:mt-20 xl:mr-12 px-10">
          <div class="bg-white rounded p-6 w-full h-full shadow-2xl card-animate">
            <!-- Logo -->
            <div class="logo  flex justify-center p-4">
              <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
                class="w-20 h-20">
            </div>
            <h1 class="h1-large mb-2 text-primary font-bold">Register</h1>
            <p class="p-large mb-8">Start by entering registration code</p>
            <label for="registrationCode" class="flex text-start mb-0 font-bold text-primary">Registration code</label>
            <input v-model="formData.coopcode" type="text"
              class="w-full h-10 px-4 rounded-lg border focus:outline-none border-blue-200 focus:border-blue-500 bg-gray-100"
              placeholder="Enter code...">
            <div class="mt-2 flex justify-end">
              <button type="button"
                class="text-white bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center"
                @click.prevent="login()">
                Proceed
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
              </button>
            </div>
            <div class="mt-4 text-start">
              <small><b>Note:</b> All Cooperatives have their respective Registration Code, Use that to proceed
                here.</small>
            </div>
          </div>
        </div>
        <div class="xl:text-right image-bg image-animate">
          <img class="h-full bg-cover" src="/src/assets/images/welcome-bg.png" alt="alternative">
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
      formData: {
        coopcode: '',
      },
      baseUrl: import.meta.env.VITE_APP_BASE_URL,
    };
  },
  mounted() {
    // Add animation class after component is mounted
    document.querySelector('.card-animate').classList.add('fade-in-left');
    document.querySelector('.image-animate').classList.add('fade-in');
  },
  methods: {
    async login() {
      // const form = new FormData();
      // form.append("coopcode", this.coopcode);
      axios
        .post(this.baseUrl + "api/checkcoopcode", this.formData) // Replace with your API endpoint
        .then((response) => {
          //console.log(response.data.record);
          console.log(response);
          if (response.status === 200) {
            // loading.present();
            setTimeout(() => {
              // this.coopcode = "";
              sessionStorage.setItem("coopid", response.data.data.id);
              sessionStorage.setItem("coopname", response.data.data.coopname);
              sessionStorage.setItem("coopaddress", response.data.data.address);
              this.$router.push("/userselect");

            }, 500);
          }
          if (response.status === 422) {
            console.log(response);
          }
        })

        .catch((error) => {
          // async function showAlert() {
          //   const alert2 = await alertController.create({
          //     header: "Login Error",
          //     message: "Cooperative Code is invalid!",
          //     buttons: ["OK"],
          //   });
          //   await alert2.present();
          // }
          // showAlert(); // Call the async function

          console.error("Error:", error);
        });

    },

  }
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