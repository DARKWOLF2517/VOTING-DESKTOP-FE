<template>
    <div class="h-screen w-screen">
        
        <div class="flex justify-center align mt-20">
            <div class="qr-scanner card rounded bg-white shadow w-auto card-animate">
                <h1 class="text-3xl flex justify-center mb-3 font-bold  text-primary">Scan QR Code</h1>
                <p class="mb-3 text-sm">Place QR code on Camera to scan. This will automatically print Result.</p>
                <div id="reader" ref="reader"></div>
                <p class="mt-2 text-xl font-bold text-primary">OR</p>
                <input type="text"
                    class="w-full mt-2 h-10 px-4 rounded-lg border focus:outline-none border-blue-200 focus:border-blue-500 bg-gray-100"
                    placeholder="Enter code..." v-model="ballotCode">
                <div class="flex justify-between mt-4 gap-2">
                    <button type="button" @click="this.$router.push('/');"
                        class="text-black bg-secondary hover:bg-accent w-80 md:w-auto md:mr-0 flex justify-center items-center">
                        Back
                    </button>
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
        
    // Add animation class after component is mounted
    document.querySelector('.card-animate').classList.add('fade-in');
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
            this.scanner.pause();
            this.ballotCode = result;
            this.submitForm();
        },

        error(err) {
            // console.error(err);
            // Prints any errors to the console
        },
        async submitForm() {
            
            const response = await axios.post(this.baseUrl + 'api/check', { ballotCode: this.ballotCode });
            console.log(response.data)
            const isValidBallotCode = response.data.error === 'Ballot has already been used';

            // static url for printing ballot code
            if (isValidBallotCode) {
                // alert(this.ballotCode)
                window.open('/printcrosswise?ballotCode=' + this.ballotCode);
                setTimeout(() => {
                    this.scanner.resume();
                }, 8000);
            }
            else {
                alert('Invalid Qr Code')
                this.scanner.resume();
            }
        },
    }
}
</script>
