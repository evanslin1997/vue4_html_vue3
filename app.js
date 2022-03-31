const app = Vue.createApp({
    data: function () {
        return {
            primaryGoal1: "have a <em>happy</em> life!",
            primaryGoal2: "make a lot of <em>money</em>",
            primaryGoal3: "have a <em>strong</em> mind",
            planLink: "https://trello.com/"
        }
    },
    methods: {
        // x:function(){},
        outputMessage() {
            const number1 = Math.random()
            if (number1 < 0.3) {
                return this.primaryGoal1
            } else if (number1 < 0.6) {
                return this.primaryGoal2
            } else {
                return this.primaryGoal3
            }
        }
    }
})
app.mount("#my-planner")