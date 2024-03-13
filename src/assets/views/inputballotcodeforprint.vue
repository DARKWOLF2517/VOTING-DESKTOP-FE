<template>
    <div class="h-screen w-screen">
        <div class="flex justify-center align mt-20">
            <div class="qr-scanner card rounded bg-white shadow">
                <label for="registrationCode" class="flex text-start mb-0 font-bold text-xl text-primary">Ballot
                    code</label>
                <div id="reader" ref="reader"></div>
                <input type="text"
                    class="w-full mt-6 h-10 px-4 rounded-lg border focus:outline-none border-blue-200 focus:border-blue-500 bg-gray-100"
                    placeholder="Enter code..." v-model="ballotCode">
                <div class="flex justify-end mt-4">
                    <button type="button" @click="this.submitForm()"
                        class="text-white bg-primary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";
export default {

    data() {
        return {
            scanner: "",
            baseUrl: import.meta.env.VITE_APP_BASE_URL,
            ballotCode: '',
        }
    },
    mounted() {
        console.log('sdf');
        this.startQrReading();
    },
    methods: {
        startQrReading() {
            this.scanner = new Html5QrcodeScanner('reader', {
                // Scanner will be initialized in DOM inside element with id of 'reader'
                qrbox: {
                    width: 250,
                    height: 250,
                },  // Sets dimensions of scanning box (set relative to reader element width)
                fps: 20, // Frames per second to attempt a scan
            });
            this.scanner.render(this.success, this.error);
            // Starts scanner
        },
        success(result) {
            this.ballotCode = result;
            this.submitForm();
        },
        async submitForm() {
            this.scanner.pause();
            const response = await axios.post(this.baseUrl + 'api/check', { ballotCode: this.ballotCode });
            console.log(response.data)
            const isValidBallotCode = response.data.error === 'Ballot has already been used';

            // static url for printing ballot code
            if (isValidBallotCode) {
                alert(this.ballotCode)
                window.open('http://192.168.4.103:5173/print?ballotCode=' + this.ballotCode);
                setTimeout(() => {
                    this.scanner.resume();
                }, 1000);
            }
            else {
                alert('Invalid Qr Code')
                this.scanner.resume();
            }
        },
        error(err) {
            // console.error(err);
            // Prints any errors to the console
        },
    }
}
</script>