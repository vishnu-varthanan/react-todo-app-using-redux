const todoReducer = (state = {todos : []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: action.payload}
        case 'DELETE_TODO':
            return {...state, todos: action.payload}
        default:
            return state;
    }
}

export default todoReducer;