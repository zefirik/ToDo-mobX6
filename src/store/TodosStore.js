
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    todos: [
        {
        id:1,
        title: "some todo",
        isPinnes: false,
        isComplete: false,
        isEditing: false,
        }
    ],
    get pinnedTodos(){
        return this.todos.filter((todo) => todo.isPinned)
    },
    get unpinnedTodos(){
        return this.todos.filter((todo) => !todo.isPinned)
    },
    create(){
        this.todos.push({
            title: "",
            isPinned: false,
            isComplete: false,
            isEditing: true,
        })
    },
    deleteTodo(todo){
        this.todos.remove(todo)
    },
    toggleComplete(todo){
        todo.isComplete = !todo.isComplete;
    },
    togglePin(todo){
        todo.isPinned = !todo.isPinned;
    },
    updateTitle(todo, title){
        todo.title = title
    },
    toggelEditing(todo){
        todo.isEditing = !todo.isEditing
    },
}