const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: 'George'
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    }
  }
});

app.mount('#events');
