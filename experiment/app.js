Vue.createApp({
    data() {
        return {
            stats: [],
            enteredDate: '',
            enteredTime: '',
            enteredSyst: '',
            enteredDias: ''
        };
    },
    methods: {
        addStats(){
            this.stats.push(this.enteredDate)
            this.stats.push(this.enteredTime)
            this.stats.push(this.enteredSyst)
            this.stats.push(this.enteredDias)
        }
    }

}).mount('#app')