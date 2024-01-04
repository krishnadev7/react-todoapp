export function Todos({todos}){

    return <div>
        {todos.map((todo,id) => {
            return <div key={id}>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}