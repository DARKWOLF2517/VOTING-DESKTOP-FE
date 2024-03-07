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
        <div class="flex justify-center items-center">
            <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div class=" image-bg image-animate">
                    <img class=" w-full bg-cover" src="/src/assets/images/thankyou.png" alt="alternative">
                </div>
                <div class="mb-16 lg:mt-32 xl:mt-10 xl:mr-12 px-10 card-animate">
                    <div class="bg-white rounded-lg p-6 h-full shadow-2xl">
                        <div class="flex justify-center">
                            <img :src="url" alt="" class="h-60">
                        </div>

                        <p class="text-3xl mb-2 text-primary font-bold">Scan QR Code</p>
                        <p class="p-large mb-6 text-primary">Please secure a copy of your QR code for printing. Thank
                            you for Voting!</p>
                        <div class="flex justify-center">
                            <button @click="download()" type="button"
                                class="text-white bg-primary hover:bg-accent w-full md:w-auto md:mr-0 flex justify-center items-center">
                                Download QR Code
                            </button>
                        </div>
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
        };
    },
    mounted() {
        // Add animation class after component is mounted
        document.querySelector('.card-animate').classList.add('fade-in-left');
        document.querySelector('.image-animate').classList.add('fade-in');
        this.generateQR()
    },
    methods: {
        async download() {
            const qr = document.createElement('a');
            qr.href = this.url;
            qr.download = sessionStorage.getItem("delegateid")+ '_'+ sessionStorage.getItem("ballotcode")+'_'+'qrcode.svg';
            qr.click();
        },
        async generateQR() {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.TOKEN}` },
            };
            let ballotCode = sessionStorage.getItem("ballotcode");
            let url = this.baseUrl + `api/generateQR/` + ballotCode;

            // this.showLoading();

            await this.axios.get(url).then((response) => {

                // loadingController.dismiss();

                this.url = response.data;

            }, error => {
                // loadingController.dismiss();

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