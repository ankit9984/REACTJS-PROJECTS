import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoList() {
  const { state, dispatch } = useTodoContext();

  const [editStates, setEditStates] = useState({});

  const handleEditBtn = (id, todo) => {
    setEditStates((prevEditStates) => ({ ...prevEditStates, [id]: true }));
    dispatch({ type: 'EDIT_TODO', payload: { id, text: todo.text } });
  };
  

  const handleSaveBtn = (id) => {
    setEditStates((prevEditStates) => ({ ...prevEditStates, [id]: false }));
  };

  const handleRemoveBtn = (id) => {
    setEditStates((prevEditStates) => ({ ...prevEditStates, [id]: false }));
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  };

  return (
    <div className='border-2'>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          {editStates[todo.id] ? (
            <div className='flex justify-around items-center mt-4'>
              <input
                type="text"
                value={todo.text}
                onChange={(e) => dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: e.target.value } })}
                className='p-2 border-[1px] border-green-500 rounded focus:border-[1px] '
              />
              <div>
                <button className='mr-4 bg-blue-700 px-4 py-1 rounded text-white' onClick={() => handleSaveBtn(todo.id)}>Save</button>
                <button className='mr-4 bg-red-700 px-4 py-1 rounded text-white' onClick={() => handleRemoveBtn(todo.id)}>Remove</button>
              </div>
            </div>
          ) : (
            <div className='flex justify-around items-center mt-4'>
              <p className='text-2xl w-1/2 rounded'>{todo.text}</p>
              <div className='w-1/2'>
                <button className='mr-4 bg-blue-700 px-4 py-1 rounded text-white' onClick={() => handleEditBtn(todo.id, todo)}>Edit</button>
                <button className='mr-4 bg-red-700 px-4 py-1 rounded text-white' onClick={() => handleRemoveBtn(todo.id)}>Remove</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
