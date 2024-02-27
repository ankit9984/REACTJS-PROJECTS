import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();
const initialState = [];

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CART':
            return[...state, action.payload];
        case 'REMOVE_CART':
            return (state.filter(item => item.id !== action.payload))
    };
}

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);
    return(
        <cartContext.Provider value={{cart, dispatch}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(cartContext);
    if(!context){
        console.log('Hey Something went wrong')
    }
    return context;
}

