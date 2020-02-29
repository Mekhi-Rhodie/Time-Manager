new Vue({
    el: "main",
    data: {
        characters: 75,
        message: "",
        todo: "",
        todos: [],
        todosCompleted: [],
        input: "",
        checked: false,
        time: new Date().toLocaleTimeString()
    },
    methods: {
        reference: function () {
            const ref = this.$refs.input.value
            console.log(ref)
            this.todos.push(ref)
            this.message = ""
            console.log(this.todos)
            console.log(this.time)
        },
        closeToDo: function (todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        todoComplete: function(todo) {
            this.todosCompleted.push(todo)
            console.log(this.todosCompleted)
        }
    }
})