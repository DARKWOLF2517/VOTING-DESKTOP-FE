<template>
    <div class="h-[1248px] w-[816px] mt-0">
        <div class="p-4 h-full w-full">
            <p class="flex justify-start font-bold text-sm"> {{ this.electionDetails.election_name }}</p>
            <div class="ballot-header border-2 border-black  p-2">
                <div class="flex justify-start gap-2">
                    <p class="flex justify-start text-sm"><b>BALLOT CODE: </b> </p>
                    <p>{{ this.$route.query.ballotCode }}</p>
                </div>
                <div class="flex justify-start gap-2">
                    <p class="flex justify-start text-sm"><b>Date Time Printed: </b> </p>
                    <p> {{ this.date }}</p>
                </div>

            </div>
            <h3 class=" flex justify-start mt-2 font-bold text-sm">List of Candidates Voted</h3>
            <div>
                <div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr class="border border-black px-4 py-2 text-sm ">
                                <th>POSITION</th>
                                <th>COOPERATIVE NAME</th>
                                <th>REPRESENTED BY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border border-black px-4 py-2" v-for="results in result">
                                <td class="text-xs">{{ results['candidates']['position']['description'] }}</td>
                                <td class="text-xs">{{ results['candidates']['delegates']['cooperatives']['coopname'] }}
                                </td>
                                <td class="text-xs">{{ results['candidates']['candidate_name'] }}</td>
                            </tr>


                        </tbody>
                    </table>
                    <p class="font-bold text-xs">
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
