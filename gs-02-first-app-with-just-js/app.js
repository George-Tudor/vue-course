Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }

}).mount('#app');

















// const buttonEl = document.querySelector('.add-goal');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
// const clearButton = document.querySelector('.clear-goals');
//
// console.log(buttonEl)
//
// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }
//
// function clearGoals() {
//   const goals = document.querySelector('ul');
//   goals.remove()
//
// }
//
// buttonEl.addEventListener('click', addGoal);
// clearButton.addEventListener('click', clearGoals);