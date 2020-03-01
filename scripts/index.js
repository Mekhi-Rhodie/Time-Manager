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
    },
    methods: {
        reference: function () {
            const ref = this.$refs.input.value
            this.todos.push(ref)
            this.message = ""
            this.characters = 76
        },
        closeToDo: function (todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        todoComplete: function (todo) {
            this.todosCompleted.push(todo)
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