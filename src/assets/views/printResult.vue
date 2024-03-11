<template>
    <div class="h-screen w-screen">
        <div class="w-72 md:w-96 bg-white border border-gray-300 rounded-lg p-4">
            <div>
                <div class="ballot-header ">
                    <p class="flex justify-start"><b>BALLOT CODE:{{ }} </b></p>
                    <p class=" flex justify-start mb-2"><b>Date Time Printed: {{ date }}</b></p>
                    <h3 class=" flex justify-start">List of Candidates Voted</h3>
                </div>
                <div class="overflow-y-auto " style="max-height: 80vh;">
                    <ul class="bg-white" v-for="candidates in result">
                        <div class="p-2 bg-gray-600 text-white">
                            <h3 class="text-lg font-semibold ">Name of Position {{  }}</h3>
                            <!-- <p class="text-center">Select 3 Candidates</p> -->
                        </div>
                        <li>
                            <div class="p-2 space-y-4 border-b border-gray-300">
                                <div class="flex-grow ml-4 ">
                                    <div class="text-l font-semibold text-center text-wrap"> COOPerative NAME
                                    </div>
                                    <p class="text-sm text-center"> Represented by:</p>
                                    <div class="text-lg font-bold text-center">CANDIDATE NAME</div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="p-6 ">
                                <p class="text-xl">No candidate/s selected</p>
                            </div>
                        </li>

                    </ul>
                    <div class="flex justify-start">
                        <p>Signature:______________________________</p>
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
            result: [],
            date: '',
        }
    },
    mounted() {
        console.log('asdf')
        const baseUrl = window.location.origin;
        console.log(baseUrl);
        this.fetchData();

        //get date
        const now = new Date();
        const formattedDateTime = now.toLocaleString(); // You can use other formatting methods as well
        this.date = formattedDateTime;
    },
    methods: {
        async fetchData() {
            try {
                const getData = await this.axios.get(this.baseUrl + 'api/fetchVoteResult/' + 145942104);
                console.log(getData.data);
                this.result = getData.data;
                // this.$router.push(getDataPrint.data);
                // Your Laravel backend base URL

            } catch (error) {
                console.log(error);
            }
        },
    },

}



</script>