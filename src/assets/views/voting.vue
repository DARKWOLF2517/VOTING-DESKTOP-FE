<template>
  <div class="h-screen w-screen">
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
              class="size-7 flex justify-center items-center flex-shrink-0  font-medium text-gray-800 rounded-full bg-accent dark:text-white">
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
    <h1 class="h1-large mb-2  text-primary font-bold">Ballot Code</h1>
    <p class="p-large ">Enter ballot code to cast your vote</p>
    <div class="flex justify-end mr-4">
      <button type="button"
        class="text-white bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center"
        @click="getCandidatesResult(), showSummaryModal = true;">
        View Summary
        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </button>
    </div>
    <div class="row flex justify-center">
      <div class="col">
      <!-- Category Buttons -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <button class="bg-white hover:bg-accent hover:text-white rounded-lg overflow-hidden shadow-lg focus:outline-none"
        @click="showModal = true, openCandidatesModal(positions['electpositionid'], positions['area_no'], positions['no_winner'], positions['description'])"
        v-for="positions in electPosition" :key="positions['electpositionid']">
        <div class="flex items-center justify-center h-40 p-4">
          <svg class="w-[40px] h-[40px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z"
              clip-rule="evenodd" />
          </svg>  
          <h2 class="text-xl font-bold mb-2 text-center">{{ positions['description'] }}</h2>
        </div>
      </button>

    </div>
    </div>
    <div class="col">
      <div class="p-4 space-y-4">

<div class="px-2 overflow-y-auto" style="max-height: 60vh; overflow-y: auto;">
  <ul v-for="positions in finalVotedList" :key="positions['electpositionid']">

    <div class="p-2 bg-primary text-white">
      <h3 class="text-xl font-semibold ">{{ positions['description'] }}</h3>
      <!-- <p class="text-center">Select 3 Candidates</p> -->
    </div>
    <li v-if="positions['candidates'] && positions['candidates'].length > 0">
      <div class="p-2 space-y-4" v-for="candidates in positions['candidates']"
        :key="candidates.ecandidateid">
        <div class="flex-grow ml-4">
          <div class="text-lg font-semibold text-center">{{ candidates.delegates.cooperatives.coopname
            }}
          </div>
          <p class="text-sm text-center"> Represented by:</p>
          <div class="text-medium font-bold text-center">{{ candidates.candidate_name }}</div>
        </div>
      </div>
      <hr>
    </li>
    <li v-else>
      <div class="p-6 ">
        <p class="text-m">No candidate/s selected</p>
      </div>
    </li>

  </ul>

</div>
</div>
    </div>
    </div>
    
    
    <!-- Voting Modal -->
    <div class="flex justify-center items-center">
      <transition name="modal-fade">
        <div v-if="showModal" id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">

          <div class="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-2xl">
            <div class="p-4">
              <!-- Modal header -->
              <div class="flex items-center justify-between border-b 0 ">
                <button @click="showModal = false, closeCandidateModal()"
                  class="text-primary mb-2 font-bold bg-white hover:bg-accent md:w-auto md:mr-0 text-sm ms-auto inline-flex justify-center items-center">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 space-y-4">
                <div class="p-2 bg-primary text-white">
                  <h3 class="text-xl font-semibold ">{{ voteCategory.description }}</h3>
                  <p class="text-center">Select {{ voteCategory.no_of_winner }} Candidates</p>
                </div>
                <div class="px-2 overflow-y-auto " style="max-height: 50vh; overflow-y: auto;">
                  <ul>
                    <li v-for="candidate in temporaryCandidates" :key="candidate['ecandidateid']">
                      <div class="p-2 space-y-4">
                        <div class="flex items-center w-full p-5 bg-gray-100 rounded-lg shadow-md">
                          <input :id="candidate.ecandidateid" type="checkbox"
                            :checked="isCandidateVoted(candidate['ecandidateid'])" @change="selectCandidates($event)"
                            name="bordered-checkbox"
                            class="w-8 mr-3 h-8 text-white bg-white border-gray-300 rounded focus:ring-blue-500">

                          <div>

                            <div id="profileImage">{{ generateInitials(candidate['candidate_name']) }}</div>
                          </div>
                          <div class="flex-grow ml-4">
                            <div class="text-lg font-semibold text-start">
                              {{ candidate['delegates']['cooperatives']['coopname'] }}e</div>
                            <p class="text-sm text-start"> Represented by:</p>
                            <div class="text-medium font-bold text-start">{{ candidate['candidate_name'] }}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center justify-end p-4 border-t">

                <button @click="showModal = false, closeCandidateModal()" type="button"
                  class="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-accent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Close
                </button>
                <button v-if="totalVoted <= voteCategory.no_of_winner" @click="showModal = false, saveVote()"
                  type="button"
                  class="text-white bg-blue-700 hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Save
                </button>
                <button v-else-if="totalVoted >= voteCategory.no_of_winner" @click="showModal = false, saveVote()"
                  :disabled="true" type="button"
                  class="text-white bg-gray-300 hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Save
                </button>

              </div>
            </div>
          </div>

        </div>
      </transition>
    </div>
    <!-- Summary Modal -->
    <div class="flex justify-center items-center">
      <transition name="modal-fade">
        <div v-if="showSummaryModal" id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">

          <div class="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-2xl">
            <div class="p-4">
              <!-- Modal header -->
              <div class="flex items-center justify-between border-b 0 ">
                <h3 class="text-2xl py-2">Summary of Votes</h3>
                <button @click="showSummaryModal = false"
                  class="text-primary mb-2 font-bold bg-white hover:bg-accent md:w-auto md:mr-0 text-sm ms-auto inline-flex justify-center items-center">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 space-y-4">

                <div class="px-2 overflow-y-auto" style="max-height: 60vh; overflow-y: auto;">
                  <ul v-for="positions in finalVotedList" :key="positions['electpositionid']">

                    <div class="p-2 bg-primary text-white">
                      <h3 class="text-xl font-semibold ">{{ positions['description'] }}</h3>
                      <!-- <p class="text-center">Select 3 Candidates</p> -->
                    </div>
                    <li v-if="positions['candidates'] && positions['candidates'].length > 0">
                      <div class="p-2 space-y-4" v-for="candidates in positions['candidates']"
                        :key="candidates.ecandidateid">
                        <div class="flex-grow ml-4">
                          <div class="text-lg font-semibold text-center">{{ candidates.delegates.cooperatives.coopname
                            }}
                          </div>
                          <p class="text-sm text-center"> Represented by:</p>
                          <div class="text-medium font-bold text-center">{{ candidates.candidate_name }}</div>
                        </div>
                      </div>
                      <hr>
                    </li>
                    <li v-else>
                      <div class="p-6 ">
                        <p class="text-m">No candidate/s selected</p>
                      </div>
                    </li>

                  </ul>

                </div>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center justify-end p-4 border-t">

                <button @click="showSummaryModal = false" type="button"
                  class="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-accent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Close
                </button>
                <button @click="  checkSubmission()" type="button"
                  class="text-white bg-blue-700 hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>
      </transition>
    </div>
    <!-- Confirmation Modal -->
    <div class="flex justify-center items-center">
      <transition name="modal-fade">
        <div v-if="showConfirmationModal" id="static-modal" data-modal-backdrop="static" tabindex="-1"
          aria-hidden="true" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">

          <div class="bg-white rounded-lg overflow-hidden shadow-lg w-96 max-w-2xl">
            <div class="p-4">
              <!-- Modal body -->
              <div class="p-4 space-y-4">
                <h1 class="text-2xl font-bold">Confirmation</h1>
                <p>Are you sure you want to submit Vote?</p>
              </div>

              <button @click="showConfirmationModal = false" type="button"
                class="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-accent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                No, cancel
              </button>
              <button @click="showConfirmationModal = false, submitVote()" type="button"
                class="text-white bg-blue-700 hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>

      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { generate } from "text-to-image";
import textToImage from 'text-to-image';
export default {
  data() {
    return {
      showModal: false,
      showSummaryModal: false,
      showConfirmationModal: false,
      isChecked: false, // Add isChecked property to store checkbox state

      baseUrl: import.meta.env.VITE_APP_BASE_URL,
      electPosition: [],
      finalVotedList: [],
      area: null,
      voteCategory: {
        electPositionId: null,
        areaNo: null,
        no_of_winner: 0,
        description: "",
      },
      candidates: [],// get all candidates
      temporaryCandidates: [],// for fetching candidates in each position
      TemporaryvotedCandidates: [] as any[],
      FinalvotedCandidates: [] as any[],
      totalVoted: 0,
      voteSummary: [],
      ballotCode: sessionStorage.getItem("ballotcode"),
      delegateId: sessionStorage.getItem("delegateid"),
    }
  },
  mounted() {

    this.fetchArea();


    //to check the session
    if (!sessionStorage.getItem("ballotcode")) {
      window.location.href = '/';
    }


  },
  methods: {
    generateInitials(fullname: string) {
      var names = fullname.split(' ');
      var lastName = names.pop(); // Remove and get the last name
      var firstName = names.slice(0, 1).join(' '); // Join the remaining items as first name(s)

      return firstName.split(' ').map(name => name.charAt(0)).join('') + lastName.charAt(0);
    },

    //to get all elect position
    async fetchElectPosition() {
      try {
        const getElectPOsition = await axios.get(this.baseUrl + 'api/getElectPosition');
        this.electPosition = getElectPOsition.data;
        console.log(getElectPOsition.data);
        //filter elect position base on area
        const filteredElectposition = this.electPosition.filter(item => item['area_no'] == this.area || item['area_no'] == 0);
        this.electPosition = filteredElectposition;
        this.electPosition.forEach(data => {
          data.candidates.forEach(candidates => {

            this.candidates.push(candidates);

          })

        });
        // console.log(this.candidates)

      } catch (error) {
        console.log(error);
      }

    },
    async fetchArea() {
      try {
        const getArea = await axios.get(this.baseUrl + 'api/getArea/' + this.ballotCode);
        this.area = getArea.data.area_no;
        console.log("Area Number of ballot code " + this.area);
      } catch (error) {
        console.log(error);
      }
      this.fetchElectPosition();
    },

    getCandidatesResult() {

      // Deep copy finalVotedList
      this.finalVotedList = this.electPosition.map(element => ({ ...element }));
      console.log(this.electPosition);

      this.finalVotedList.forEach(element => {
        // Deep copy candidates array
        element.candidates = element.candidates.map(candidate => ({ ...candidate }));
        // Filter candidates in finalVotedList
        element.candidates = element.candidates.filter(candidate => this.FinalvotedCandidates.includes(candidate.ecandidateid));
      });
    },

    //to open candidates modal
    async openCandidatesModal(electpositionid: any, areaNo: any, no_of_winner: any, description: any) {
      // console.log("candidates" + this.TemporaryvotedCandidates);

      // console.log("Description " + description);
      // console.log("Area Number " + areaNo);
      // console.log("Election Position Id " + electpositionid);
      // console.log("Number of Winner " + no_of_winner);

      // this.voteCategory.areaNo = areaNo;
      this.voteCategory.description = description;
      // this.voteCategory.electPositionId = electpositionid;
      this.voteCategory.no_of_winner = no_of_winner;

      // get all candidates under positions
      this.temporaryCandidates = [...this.candidates];
      const filteredCandidates = this.temporaryCandidates.filter(candidate => {
        return candidate.area_no == areaNo && candidate.electpositionid == electpositionid;
      });

      this.temporaryCandidates = filteredCandidates
      // console.log(this.temporaryCandidates)
      // console.log(filteredCandidates)
      // try {
      //   const candidates = await axios.post(this.baseUrl + 'api/getCandidates/', this.voteCategory);
      //   this.candidates = candidates.data;
      //   //to get the total voted count


      // } catch (error) {
      //   console.log(error);
      // }
      this.getTotalVotedCount();

      console.log("temporary votes id " + this.TemporaryvotedCandidates);
      console.log("final votes id " + this.FinalvotedCandidates)
    },
    closeCandidateModal() {
      this.TemporaryvotedCandidates = [...this.FinalvotedCandidates];
      console.log("temporary votes id " + this.TemporaryvotedCandidates);
      console.log("final votes id " + this.FinalvotedCandidates)
    },

    //trigger when choosing candidate
    selectCandidates(event: any) {

      console.log("Checked state:", event.target.checked);
      console.log("Checkbox id:", parseInt(event.target.id));
      if (event.target.checked == true) {
        this.TemporaryvotedCandidates.push(parseInt(event.target.id))
        console.log(this.TemporaryvotedCandidates)
        console.log('passed')

        //to get the total voted count
        this.getTotalVotedCount();
      }
      else {
        console.log(parseInt(event.target.id))
        let index = this.TemporaryvotedCandidates.indexOf(parseInt(event.target.id))
        this.TemporaryvotedCandidates.splice(index, 1);
        console.log(this.TemporaryvotedCandidates);

        //to get the total voted count
        this.getTotalVotedCount();
      }
    },
    saveVote() {
      // get candidate id foreach candidate in page
      let candidateID = [] as any;
      this.candidates.forEach(element => {
        candidateID.push(element['ecandidateid']);
        // console.log(element)
      });
      // Check if data in TemporaryvotedCandidates is present in candidates and filter
      this.TemporaryvotedCandidates.forEach(temporaryID => {
        if (candidateID.includes(temporaryID)) {
          if (!this.FinalvotedCandidates.includes(temporaryID)) {
            this.FinalvotedCandidates.push(temporaryID);
          }
        }
      });

      // remove data if the user will remove vote
      for (let i = this.FinalvotedCandidates.length - 1; i >= 0; i--) {
        const candidate = this.FinalvotedCandidates[i];
        if (candidate !== candidateID && !this.TemporaryvotedCandidates.includes(candidate)) {
          this.FinalvotedCandidates.splice(i, 1);
        }
      }
      console.log("candidate id " + candidateID);
      console.log("temporary votes id " + this.TemporaryvotedCandidates);
      console.log("final votes id " + this.FinalvotedCandidates)
      this.closeCandidateModal();
    },
    checkSubmission() {
      if (this.FinalvotedCandidates.length > 0) {
        this.showConfirmationModal = true;
      }
      else {
        this.showError('Please Select Candidates before Submitting')
      }
    },

    async submitVote() {
      try {
        const submitVote = await axios.post(this.baseUrl + 'api/submitVote/' + this.ballotCode + '/' + this.delegateId, this.FinalvotedCandidates);
        console.log(submitVote.data);

        window.location.href = '/submit?ballotCode=' + this.ballotCode + '&delegateId=' + this.delegateId;
        sessionStorage.clear()

      } catch (error) {
        console.log(error);
      }


    },

    //check the checkbox if it is present in TemporaryvotedCandidates
    isCandidateVoted(candidateId: any) {
      return this.FinalvotedCandidates.includes(candidateId);
    },
    getTotalVotedCount() {
      //to get the total voted count
      let selectedCandidates = this.temporaryCandidates.filter(candidate => {
        return this.TemporaryvotedCandidates.includes(candidate['ecandidateid']);
      });
      this.totalVoted = selectedCandidates.length;
    },
    showError(message: any) {
      toast.error(message), {
        autoClose: 100,
      }
    },
  },

}
</script>


<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

#profileImage {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background: #0100DE;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  line-height: 100px;
  margin: 20px 0;
}
</style>