import { observer, useLocalObservable } from "mobx-react-lite";
import TodosStore from "../store/TodosStore";

export const TodoFunction = observer (() => {
    const todoStore = useLocalObservable(() => (TodosStore));
    let i = 1;
    return(
        <>
        <div>
        <button onClick={todoStore.create}>
            <span>+</span>
            <span>&nbsp;Create</span>
        </button>
        </div>
        <div className="wrapper">
        <ul className='todos' >
            {todoStore.pinnedTodos.map((todo) =>(
                <li key = {i += 1} className={`pinned ${todo.isComplete ? 'complete' : ''}`} >
                    {todo.isEditing && (
                    <input 
                        value={todo.title} 
                        onChange={(e) => todoStore.updateTitle(todo, e.target.value)}
                        onBlur = {() => todoStore.toggelEditing(todo)}/>)}
                    {!todo.isEditing && 
                        (<span onClick={() =>todoStore.toggelEditing(todo)}>
                            {todo.title}
                        </span>)}
                    <button onClick={() => todoStore.toggleComplete(todo)}>✅</button>
                    <button onClick={() => todoStore.deleteTodo(todo)}>❌</button>
                    <button onClick={() => todoStore.togglePin(todo)}>⭐</button>
                </li>
            ))}
            {todoStore.unpinnedTodos.map((todo) =>(
                <li key = {i += 1} className={`${todo.isComplete ? 'complete' : ''}`} >
                    {todo.isEditing && (
                    <input 
                        value={todo.title} 
                        onChange={(e) => todoStore.updateTitle(todo, e.target.value)}
                        onBlur = {() => todoStore.toggelEditing(todo)}/>)}
                    {!todo.isEditing && 
                        (<span onClick={() =>todoStore.toggelEditing(todo)}>
                            {todo.title}
                        </span>)}
                    <button onClick={() => todoStore.toggleComplete(todo)}>✅</button>
                    <button onClick={() => todoStore.deleteTodo(todo)}>❌</button>
                    <button onClick={() => todoStore.togglePin(todo)}>⭐</button>
                </li>
            ))}
        </ul>
        </div>
        </>
    )

})