<template>
    <div class="min-h-screen h-screen w-screen">
        <div class="loading-overlay" v-if="isLoading">
            <div class="loading-spinner"></div>
        </div>
        <!-- Navigation Bar -->
        <nav class="bg-primary p-2 w-screen">
            <div class="container">
                <div class="flex justify-start ">
                    <img src="../images/climbs-logo.jpg" alt="CLIMBS Logo" class="w-10 h-10 ">
                </div>
            </div>
        </nav>
        <div class="content">
            <div class="stepper flex justify-center mt-4">
                <!-- Stepper -->
                <ul class="relative flex flex-col md:flex-row gap-2">
                    <!-- Item -->
                    <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                        <div
                            class="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                            <span
                                class="size-7 flex justify-center items-center flex-shrink-0  font-medium text-gray-800 rounded-full bg-accent dark:text-white">
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
                                class="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-stone-200">
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
            <div class="flex justify-start">
                <button type="button" @click="this.$router.push('/');"
                    class="text-white ml-3 bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center">
                    Back
                </button>
            </div>
            <div class="flex justify-center items-center content-section">
                <div class="container sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div class=" image-bg image-animate">
                        <div class="image-container">
                            <img class=" w-full bg-cover" src="/src/assets/images/ballot-code.png" alt="alternative">
                        </div>
                    </div>
                    <div class="mb-16  xl:mr-12 px-10 card-animate card">
                        <div class="bg-white rounded-lg p-6 shadow-2xl">
                            <h1 class="h1-large text-primary font-bold">Ballot Code</h1>
                            <p class="text-xl mb-4">Scan or Enter ballot code to cast your vote</p>
                            <label for="registrationCode"
                                class="flex text-start mb-0 font-bold text-2xl text-primary">Scan
                                QR
                                code</label>
                            <div id="reader" ref="reader" class="mb-2"></div>
                            <p class="font-bold flex justify-center text-2xl">OR</p>
                            <label for="registrationCode"
                                class="flex text-start mb-0 font-bold text-2xl text-primary">Ballot
                                code</label>
                            <input v-model="formData.ballotCode" type="text"
                                class="w-full h-10 mt-2 px-4 rounded-lg border focus:outline-none border-blue-200 focus:border-blue-500 bg-gray-100"
                                placeholder="Enter Ballot Code...">
                            <div class="mt-2">
                                <div class="start-btn flex justify-end">
                                    <button @click.prevent="checkBallotCode" type="button"
                                        class="text-white bg-primary hover:bg-accent w-full md:w-auto md:mr-0 flex justify-center items-center ">
                                        Start Voting
                                        <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
export default {
    data() {
        return {
            isLoading: false,
            formData: { ballotCode: '' },
            baseUrl: import.meta.env.VITE_APP_BASE_URL,
        }
    },
    mounted() {
        // Add animation class after component is mounted
        document.querySelector('.card-animate').classList.add('fade-in-left');
        document.querySelector('.image-animate').classList.add('fade-in');
        // if (!sessionStorage.getItem("delegateid")) {
        //     window.location.href = '/';
        this.startQrReading();
        // }
    },
    methods: {
        startQrReading() {
            this.scanner = new Html5QrcodeScanner('reader', {
                // Scanner will be initialized in DOM inside element with id of 'reader'
                qrbox: {
                    width: 250,
                    height: 250,
                },  // Sets dimensions of scanning box (set relative to reader element width)
                fps: 20, // Frames per second to attempt a scan
            }, true);
            this.scanner.render(this.success, this.error);
            // Starts scanner

        },
        success(result: any) {
            this.scanner.pause();
            this.formData.ballotCode = result;
            this.checkBallotCode();
        },

        error(err: any) {
            console.error(err);
            // Prints any errors to the console
        },
        async checkBallotCode() {
            this.isLoading = true;
            try {

                //console.log(this.ballotCode)
                const response = await axios.post(this.baseUrl + 'api/check', { ballotCode: this.formData.ballotCode });
                console.log(response.data)
                const isValidBallotCode = response.data[0] === 'ballotCode exist';
                // console.log('isValidBallotCode:', isValidBallotCode); // Log the value of isValidBallotCode
                //console.log(response)
                if (isValidBallotCode) {
                    // Navigate to the next page
                    // this.$router.push('/go');
                    console.log(response.data[1])
                    sessionStorage.setItem("ballotcode", this.formData.ballotCode);
                    sessionStorage.setItem("delegateid", response.data[1]);
                    window.location.href = '/voting';
                    this.isLoading = false;
                    this.scanner.resume();
                    // this.$router.push({ path: '/voting', query: { ballotCode: this.ballotCode } });
                } else {
                    this.showError(response.data.error)
                    // Display an error message or take appropriate action
                    //alert('Invalid ballot code or ballot has already been used');
                    // this.toastMessage = 'Invalid ballot code or ballot has already been used';
                    // this.showToast = true;
                    // this.showToastMessage();
                    this.isLoading = false;
                    this.scanner.resume();
                }

            } catch (error) {
                console.log(error);
            }
        },
        showError(message: any) {
            toast.error(message), {
                autoClose: 100,
            }
        },
    }
};
</script>
