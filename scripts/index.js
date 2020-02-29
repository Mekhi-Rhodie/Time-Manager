new Vue({
    el: "main",
    data: {
        message: "",
        todo: "",
        todos: [],
        todosCompleted: [],
        input: "",
        checked: false
    },
    methods: {
        reference: function () {
            const ref = this.$refs.input.value
            console.log(ref)
            this.todos.push(ref)
            this.message = ""
            console.log(this.todos)
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