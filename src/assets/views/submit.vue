<template>
    <div class="h-screen w-screen">
        <!-- Navigation Bar -->
        <nav class="bg-primary p-2 w-screen">
            <div class="container">
                <div class="flex justify-start ">
                    <img src="../images/climbs-logo.jpg" alt="CLIMBS Logo" class="w-10 h-10 ">
                </div>
            </div>
        </nav>

        <div class="stepper flex justify-center mt-4">
            <!-- Stepper -->
            <ul class="relative flex flex-col md:flex-row gap-2">
                <!-- Item -->
                <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div
                        class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                        <span
                            class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-stone-200">
                            1
                        </span>
                        <div
                            class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-40 md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-stone-300">
                        </div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                        <span class="block text-sm font-medium text-gray-800 text-center">
                            Ballot Code
                        </span>
                    </div>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div
                        class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                        <span
                            class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-stone-200">
                            2
                        </span>
                        <div
                            class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-40 md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-stone-300">
                        </div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                        <span class="block text-sm font-medium text-gray-800 text-center">
                            Voting
                        </span>
                    </div>
                </li>
                <!-- End Item -->

                <!-- Item -->
                <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                    <div
                        class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                        <span
                            class="size-7 flex justify-center items-center flex-shrink-0  font-medium text-gray-800 rounded-full bg-accent dark:text-white">
                            3
                        </span>
                        <div
                            class="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-40 md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-stone-300">
                        </div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5">
                        <span class="block text-sm font-medium text-gray-800 text-center">
                            Submit
                        </span>
                    </div>
                </li>
                <!-- End Item -->
            </ul>
            <!-- End Stepper -->
        </div>
        <div class="flex justify-start ml-4">
            <router-link to="/" tag="button"
                class="text-white bg-primary hover:bg-accent mr-4 md:w-auto md:mr-0 flex justify-center items-center rounded p-4">
                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                </svg>
                Exit Voting
            </router-link>
        </div>
        <h1 class="h1-large  text-primary font-bold">Vote Submitted </h1>
        <p class="text-lg ">Thank you for Voting!</p>
        <div class="flex justify-center items-center">
            <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div class=" image-bg image-animate">
                    <img class=" w-full bg-cover" src="/src/assets/images/welcome-bg.png" alt="alternative">
                </div>

                <div class="mb-16 lg:mt-32 xl:mt-10 xl:mr-12 px-10 card-animate">
                    <div class="bg-white rounded-lg p-6 h-full shadow-2xl">
                        <div class="flex justify-center mt-2">
                            <img :src="url" alt="" class="h-80">
                        </div>

                        <p class="text-3xl mb-2 mt-2 text-primary font-bold">Secure QR Code</p>
                        <p class="p-large mb-6  text-xl">Please secure a copy of your QR code for printing. Thank
                            you for Voting!</p>
                        <div class="flex justify-center">
                            <button @click="download()" type="button"
                                class="text-white text-lg bg-primary hover:bg-accent w-96 justify-center items-center">
                                Download QR Code
                            </button>
                        </div>
                        <div class="flex justify-center mt-2">
                            <button @click="print()" type="button"
                                class="text-black text-lg bg-accent hover:bg-primary w-96 flex justify-center items-center">
                                Print Result
                            </button>
                        </div>
                        <!-- <div class="flex justify-center mt-2">
                            <button @click="print()" type="button"
                                class="text-black text-lg bg-secondary hover:bg-primary w-96 flex justify-center items-center">
                                Exit
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
export default {
    data() {
        return {
            baseUrl: import.meta.env.VITE_APP_BASE_URL,
            url: "",
            ballotCode: this.$route.query.ballotCode,
        };
    },
    mounted() {
        // Add animation class after component is mounted
        document.querySelector('.card-animate').classList.add('fade-in-left');
        document.querySelector('.image-animate').classList.add('fade-in');
        this.generateQR()
    },
    methods: {
        async print() {
            window.location.href = '/print?ballotCode=' + this.ballotCode;
            // try {
            //     const getDataPrint = await this.axios.get(this.baseUrl + 'api/fetchVoteResult/' + this.ballotCode);
            //     console.log(getDataPrint.data);
            //     // this.$router.push(getDataPrint.data);
            //  // Your Laravel backend base URL
            //     const url = this.baseUrl + 'api/fetchVoteResult/'+ this.ballotCode;
            //     window.open(url);
            //     console.log(url)
            // } catch (error) {
            //     console.log(error);
            // }
        },
        async download() {
            const qr = document.createElement('a');
            qr.href = this.url;
            qr.download = this.$route.query.delegateId + '_' + this.$route.query.ballotCode + '_' + 'qrcode.svg';
            qr.click();
        },
        async generateQR() {
            // const config = {
            //     headers: { Authorization: `Bearer ${localStorage.TOKEN}` },
            // };
            let url = this.baseUrl + `api/generateQR/` + this.ballotCode;
            // this.showLoading();

            await this.axios.get(url).then((response) => {

                // loadingController.dismiss();

                this.url = response.data;

            }, error => {
                // loadingController.dismiss();
                console.log(error)
            });
            console.log(this.url)
        },

    },
};
</script>


<style scoped>
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