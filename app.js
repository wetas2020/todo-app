const { createApp, ref } = Vue;

createApp({
    setup() {
        const title = ref('Hello vue!');
        return {
            title
        };
    },
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach((todo) => {
                todo.done = true;
            });
        }
    }
}).mount('#app');
