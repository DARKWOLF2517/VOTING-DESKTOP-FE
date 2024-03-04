<template>


    <h1>hello world</h1>
    <button>button ni sya</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            baseUrl: import.meta.env.VITE_APP_BASE_URL,
        }
    },
    mounted() {
        console.log('asdfdsf')
        this.fetchArea();
    },

    methods: {
        async fetchArea() {
            try {
                const getArea = await axios.get(this.baseUrl + 'api/getElectPosition');
                console.log(getArea.data)

            } catch (error) {
                console.log(error);
            }
        },
    }
});

</script>