

new Vue({
    el: "main",
    data: {
        message: "",
        maxcharacter: 75,
        remaincharactersText: "",
        message: "",
        todo: "",
        todos: [],
        todosCompleted: [],
        input: "",
        checked: false,
        time: "",
    },
    methods: {
        reference: function () {
            const ref = this.$refs.input.value
            console.log(ref)
            this.todos.push(ref)
            this.message = ""
            console.log(this.todos)
            console.log(this.time)
            this.characters = 76
            this.time = new Date().toLocaleTimeString()
        },
        closeToDo: function (todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        todoComplete: function (todo) {
            this.todosCompleted.push(todo)
            console.log(this.todosCompleted)
        },
        characterCount: function () {
            if (this.message.length > this.maxcharacter) {
                this.remaincharactersText = "Exceeded " + this.maxcharacter + " characters limit.";
            } else {

                var remainCharacters = this.maxcharacter - this.message.length;
                this.remaincharactersText = remainCharacters;
            }
        }
    }
})