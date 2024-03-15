<template>
    <div class="h-[1248px] w-[816px]">
        <div class="p-8 h-full">
            <p class="flex justify-start font-bold"> {{ this.electionDetails.election_name }}</p>
            <div class="ballot-header border-2 border-black  p-2">
                <div class="flex justify-start gap-2">
                    <p class="flex justify-start"><b>BALLOT CODE: </b> </p>
                    <p>{{ this.$route.query.ballotCode }}</p>
                </div>
                <div class="flex justify-start gap-2">
                    <p class="flex justify-start"><b>Date Time Printed: </b> </p>
                    <p> {{ this.date }}</p>
                </div>

            </div>
            <h3 class=" flex justify-start mt-2 font-bold">List of Candidates Voted</h3>
            <div>
                <div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="border border-black px-4 py-2 ">POSITION</th>
                                <th class="border border-black px-4 py-2">COOPERATIVE NAME</th>
                                <th class="border border-black px-4 py-2">REPRESENTED BY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="results in result">
                                <td>{{ results['candidates']['position']['description'] }}</td>
                                <td>{{ results['candidates']['delegates']['cooperatives']['coopname'] }}</td>
                                <td>{{ results['candidates']['candidate_name'] }}</td>
                            </tr>


                        </tbody>
                    </table>
                    <p class="font-bold mt-4">
                        ***************Nothing Follows***************
                    </p>
                    <div class="flex justify-start overflow-x-hidden mt-6">
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
            electionDetails: [],
            date: '',
        }
    },
    mounted() {
        this.fetchData();
        this.getDate();
    },
    methods: {
        getDate() {
            //get date
            const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
            const now = new Date();
            const formattedDateTime = now.toLocaleString("en-US", options as any); // You can use other formatting methods as well
            this.date = formattedDateTime;
        },
        async fetchData() {
            try {
                const getData = await axios.get(this.baseUrl + 'api/fetchVoteResult/' + this.$route.query.ballotCode,);
                console.log(getData.data.electPosition);
                this.result = getData.data.voteData;
                this.electionDetails = getData.data.electPosition;
            } catch (error) {
                console.log(error);
            }
            // setTimeout(() => {
            //     window.print();
            // }, 1000)

        },
    },

}
</script>
