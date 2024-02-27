import { createContext, useContext, useReducer } from "react";

const initialState = {
    todos: []
}

const todoContext = createContext();

const todoReducer = (state, action) => {
    // console.log(state)
    switch(action.type){
        case 'ADD_TODO' : 
        return {
            ...state,
            todos: [...state.todos, action.payload]
        };
        case 'EDIT_TODO':
        return {
            ...state,
            todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            ),
        };

    //     case 'SAVE_TODO':
    //         return {
    //             ...state,
    //             todos: state.todos.map((todo) =>
    //             todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
    //         ),
    //   };
        case 'REMOVE_TODO':
        return{
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id)
         }
    }
}

const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return(
        <todoContext.Provider value={{dispatch, state}}>
            {children}
        </todoContext.Provider>
    )
}

const useTodoContext = () =>{
    return useContext(todoContext)
}

export {TodoProvider, useTodoContext}