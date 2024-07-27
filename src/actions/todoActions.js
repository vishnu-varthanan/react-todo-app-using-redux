export const addTodoAction =(todo) =>(dispatch, getState)=>{
    const {
        Todo : {todos}
    } = getState();
    const addTodo = todos.find(t => t.id === todo)
    if(!addTodo && todo.length){
        dispatch(
            {
                type: 'ADD_TODO',
                payload: [...todos, {id:todo,todo}]
            }
        )
    }
}

export const deleteTodoAction =(todo) =>(dispatch, getState)=>{
    const {
        Todo : {todos}
    } = getState();
    const newTodos = todos.filter(t => t.id!== todo)
    dispatch(
        {
            type: 'DELETE_TODO',
            payload: newTodos
        }
    )

}