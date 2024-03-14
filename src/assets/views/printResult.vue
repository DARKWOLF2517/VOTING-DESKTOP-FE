<template>
    <div>
        <div class="w-72 md:w-96 bg-white border border-gray-300 rounded-lg p-4">
            <div>
                <div class="ballot-header ">
                    <p class="flex justify-start text-xs"><b>BALLOT CODE:{{ this.$route.query.ballotCode }} </b></p>
                    <p class=" flex justify-start mb-2 text-xs"><b>Date Time Printed: {{ date }}</b></p>
                    <h3 class=" flex justify-start">List of Candidates Voted</h3>
                </div>
                <div>
                    <div v-for="positions in finalResults">
                        <ul class="bg-white" v-if="positions['area_no'] == area || positions['area_no'] == 0">
                            <div class="p-2 border-2 border-dashed border-black">
                                <h3 class="text-m font-semibold ">Name of Position {{ positions['description'] }}</h3>
                                <!-- <p class="text-center">Select 3 Candidates</p> -->
                            </div>
                            <div v-if="positions.candidates && positions.candidates.length > 0">
                                <li v-for="candidates in positions.candidates">
                                    <div class="p-2 space-y-4 border-b border-gray-300">
                                        <div class="flex-grow ml-4 ">
                                            <div class="text-sm font-semibold text-center text-wrap"> {{
                        candidates['delegates']['cooperatives']['coopname'] }}
                                            </div>
                                            <p class="text-sm text-center"> Represented by:</p>
                                            <div class="text-m font-bold text-center">
                                                {{ candidates['candidate_name'] }}</div>
                                        </div>
                                    </div>
                                </li>


                            </div>
                            <div v-else>
                                <li>
                                    <div class="p-6 ">
                                        <p class="text-m">No candidate/s selected</p>
                                    </div>
                                </li>
                            </div>

                        </ul>
                    </div>


                    <div class="flex justify-start overflow-x-hidden mt-4">
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
            electPositions: [],
            area: 0,
            finalResults: [],
        }
    },
    mounted() {
        console.log('asdf')
        const baseUrl = window.location.origin;
        console.log(baseUrl);
        this.fetchData();

        //get date
        const options = {year:"numeric", month:"long", day: "numeric", hour:"numeric", minute:"numeric", second:"numeric"}
        const now = new Date();
        const formattedDateTime = now.toLocaleString("en-US", options as any); // You can use other formatting methods as well
        this.date = formattedDateTime;
    },
    methods: {
        async fetchData() {
            try {
                const getData = await axios.get(this.baseUrl + 'api/fetchVoteResult/' + this.$route.query.ballotCode,);

                getData.data.voteData.forEach(element => {
                    this.result.push(element.candidates.ecandidateid)
                });
                this.electPositions = getData.data.electPosition.electpositions;
                this.area = getData.data.area;

                // Deep copy finalVotedList
                this.finalResults = this.electPositions.map(element => ({ ...element }));
                this.finalResults.forEach(element => {
                    // Deep copy candidates array
                    element.candidates = element.candidates.map(candidate => ({ ...candidate }));
                    // Filter candidates in finalResults
                    element.candidates = element.candidates.filter(candidate => this.result.includes(candidate.ecandidateid));
                });

                console.log(this.finalResults)


            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                window.print();
            }, 1000)

        },
    },

}



</script>