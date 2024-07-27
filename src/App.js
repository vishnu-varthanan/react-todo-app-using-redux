import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodoAction, deleteTodoAction } from './actions/todoActions';
import { useState } from 'react';

function App() {
  const[todo, setTodo] = useState('')
  const [searchString, setSearchString] = useState('')
  const {todos} = useSelector(store => store.Todo)
  const dispatch = useDispatch()

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(addTodoAction(todo))
    setTodo('')
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='todo-list-container'>
       <h1>To-Do List</h1>  
        <form >
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add you todo...'/>
          <button type="submit" onClick={handleSubmit}>Add+</button>
        </form>
          <input type="text" value={searchString} onChange={(e)=>setSearchString(e.target.value)} placeholder='Search you todo...' className='search-input'/>
        <div className='lists-container'>
       
          {
            todos.length > 0 ? (searchString.length ? todos.filter(t => t.todo.toLowerCase().includes(searchString.trim().toLowerCase())) : todos).map(todo => (
              <div key={todo.id} className='list-container'>
                <div className='todo-data'>{todo.todo}</div>
                <button onClick={()=>dispatch(deleteTodoAction(todo.id))}>Delete</button>
              </div>
            )) : <div className='empty-list'>Add your Todo....</div>
          }
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
