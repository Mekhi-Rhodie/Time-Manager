new Vue({
    el: "main",
    data: {
        message: "",
        todo: "",
        todos: [],
        input: ""
    },
    methods: {
        reference: function () {
            const ref = this.$refs.input.value
            console.log(ref)
            this.todos.push(ref)
            this.message = ""
            console.log(this.todos)
        }
    }
})