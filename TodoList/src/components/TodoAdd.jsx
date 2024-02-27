import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';

function TodoAdd() {
    const {dispatch} = useTodoContext();
    const [newTodo, setNewTodo] = useState('');

    const handleAddBtn = () => {
        if(newTodo.trim() !== ''){
            dispatch({type: 'ADD_TODO', payload: {id: Math.floor(Math.random()*100), text:newTodo, complete: false}});
            setNewTodo('');
            console.log(newTodo)
        }
    }
  return (
    <div >
      <input 
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      className='p-3 border border-green-600 rounded-md mr-4 focus:outline-none mb-6'
      placeholder='Write Your Task...'
       />
      <button className='bg-green-500 px-4 py-2 rounded-lg text-white ' onClick={handleAddBtn}>Add Todo</button>
    </div>
  )
}

export default TodoAdd
