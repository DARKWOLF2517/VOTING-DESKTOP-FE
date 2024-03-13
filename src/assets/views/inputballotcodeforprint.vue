<template>
    <div class="h-screen w-screen">
        <div class="flex justify-center align mt-20">
            <div class="qr-scanner w-96 card rounded bg-white shadow">
                <label for="registrationCode" class="flex text-start mb-0 font-bold text-xl text-primary">Ballot
                    code</label>
                <input type="text"
                    class="w-full h-10 px-4 rounded-lg border focus:outline-none border-blue-200 focus:border-blue-500 bg-gray-100"
                    placeholder="Enter code...">
                    <div class="flex justify-end mt-4">
                            <button type="button"
                                class="text-white bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center">
                                Submit
                            </button>
                    </div>
                
            </div>
        </div>
    </div>
</template>