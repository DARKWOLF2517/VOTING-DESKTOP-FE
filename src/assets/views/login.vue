<template>
    <div class="h-screen w-screen">
        <!-- Navigation Bar -->
        <nav class="bg-primary p-2">
            <div class="container mx-auto">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
                        class="w-10 h-10">
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="container">
            <div class="flex flex-col justify-center items-center h-screen md:flex-row">
                <!-- Container 1: Sample Image -->
                <div class=" rounded-lg mb-4 md:mb-0 md:mr-4 ml-0">
                    <img src="https://www.climbs.coop/wp-content/uploads/2021/10/climbs-logo.jpg" alt="Sample Image"
                        class="w-80 h-80 object-cover">
                </div>

                <!-- Container 2: Input Text -->
                <div class="p-4 rounded-lg">
                    <p class="text-5xl font-bold text-start text-primary">Register</p>
                    <p class="text-start">Please Input Registration Code</p>
                    <input v-model="inputText" type="text"
                        class="w-80 mt-6 h-10 px-4 rounded-lg border focus:outline-none focus:border-blue-500 bg-gray-200"
                        placeholder="Enter text...">
                    <div class="mt-2 flex justify-end">
                        <button
                            class="bg-blue-500  hover:bg-blue-400 text-white font-bold border-b-4  rounded">Proceed</button>
                    </div>
                    <div class="flex justify-start">
                        <small><b>Note:</b> Hello</small>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputText: ''
        };
    }
};
</script>

<style scoped>
/* Add Tailwind CSS classes */
</style>