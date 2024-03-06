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
        @click="showSummaryModal = true">
        View Summary
        <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </button>
    </div>
    <!-- Category Buttons -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <button class="bg-white hover:bg-accent hover:text-white rounded-lg overflow-hidden shadow-lg focus:outline-none"
        @click="showModal = true">
        <div class="flex items-center justify-center h-40 p-4">
          <svg class="w-[40px] h-[40px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z"
              clip-rule="evenodd" />
          </svg>
          <h2 class="text-xl font-bold mb-2 text-center">Top 3 out of 5 Board of Directors</h2>
        </div>
      </button>

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
                <button @click="showModal = false"
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
                  <h3 class="text-xl font-semibold ">Top 3 of Top 5 Board of Director</h3>
                  <p class="text-center">Select 3 Candidates</p>
                </div>
                <div class="px-2 overflow-y-auto max-h-80">
                  <ul>
                    <li>
                      <div class="p-2 space-y-4">
                        <div class="flex items-center w-full p-5 bg-gray-100 rounded-lg shadow-md">
                          <input id="bordered-checkbox-1" type="checkbox" :checked="isChecked" name="bordered-checkbox"
                            class="w-8 mr-3 h-8 text-white bg-white border-gray-300 rounded focus:ring-blue-500">

                          <div class="flex-shrink-0 h-20 w-20 bg-cover bg-center rounded overflow-hidden">
                            <img src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                              alt="candidate-image">
                          </div>
                          <div class="flex-grow ml-4">
                            <div class="text-lg font-semibold text-start">COOPERATIVE NAME show up here</div>
                            <p class="text-sm text-start"> Represented by:</p>
                            <div class="text-medium font-bold text-start">John Doe</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="p-2 space-y-4">
                        <div class="flex items-center w-full p-5 bg-gray-100 rounded-lg shadow-md">
                          <input id="bordered-checkbox-1" type="checkbox" :checked="isChecked" name="bordered-checkbox"
                            class="w-8 mr-3 h-8 text-white bg-white border-gray-300 rounded focus:ring-blue-500">

                          <div class="flex-shrink-0 h-20 w-20 bg-cover bg-center rounded overflow-hidden">
                            <img src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                              alt="candidate-image">
                          </div>
                          <div class="flex-grow ml-4">
                            <div class="text-lg font-semibold text-start">COOPERATIVE NAME show up here</div>
                            <p class="text-sm text-start"> Represented by:</p>
                            <div class="text-medium font-bold text-start">John Doe</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="p-2 space-y-4">
                        <div class="flex items-center w-full p-5 bg-gray-100 rounded-lg shadow-md">
                          <input id="bordered-checkbox-1" type="checkbox" :checked="isChecked" name="bordered-checkbox"
                            class="w-8 mr-3 h-8 text-white bg-white border-gray-300 rounded focus:ring-blue-500">

                          <div class="flex-shrink-0 h-20 w-20 bg-cover bg-center rounded overflow-hidden">
                            <img src="https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg"
                              alt="candidate-image">
                          </div>
                          <div class="flex-grow ml-4">
                            <div class="text-lg font-semibold text-start">COOPERATIVE NAME show up here</div>
                            <p class="text-sm text-start"> Represented by:</p>
                            <div class="text-medium font-bold text-start">John Doe</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Modal footer -->
              <div class="flex items-center justify-end p-4 border-t">

                <button @click="showModal = false" type="button"
                  class="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-accent hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                  Close
                </button>
                <button @click="showModal = false" type="button"
                  class="text-white bg-blue-700 hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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

                <div class="px-2 overflow-y-auto max-h-80">
                  <ul>

                    <div class="p-2 bg-primary text-white">
                      <h3 class="text-xl font-semibold ">POsition</h3>
                      <p class="text-center">Select 3 Candidates</p>
                    </div>
                    <li>
                      <div class="p-2 space-y-4">
                        <div class="flex-grow ml-4">
                          <div class="text-lg font-semibold text-center">COOPERATIVE NAME show up here</div>
                          <p class="text-sm text-center"> Represented by:</p>
                          <div class="text-medium font-bold text-center">John Doe</div>
                        </div>
                      </div>
                      <hr>
                    </li>
                    <li>
                      <div class="p-2 space-y-4">
                        <div class="flex-grow ml-4">
                          <div class="text-lg font-semibold text-center">COOPERATIVE NAME show up here</div>
                          <p class="text-sm text-center"> Represented by:</p>
                          <div class="text-medium font-bold text-center">John Doe</div>
                        </div>
                      </div>
                      <hr>
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
                <button @click="showConfirmationModal = true" type="button"
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
        <div v-if="showConfirmationModal" id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">

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
                <button @click="showConfirmationModal = false" type="button"
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

<script>

export default {
  data() {
    return {
      showModal: false,
      showSummaryModal: false,
      showConfirmationModal: false,
      isChecked: false // Add isChecked property to store checkbox state
    }
  }
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
</style>