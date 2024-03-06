<template>


    <h1>hello world</h1>
    <button>button ni sya</button>OB
    <div class="text-4xl font-bold text-[#202dbf]">Hello</div>
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
        
    },

    methods: {

    }
});

</script>