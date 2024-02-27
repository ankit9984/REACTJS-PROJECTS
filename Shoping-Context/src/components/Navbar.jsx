import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cart } = useCart();

    return (
        <div className="flex items-center justify-between p-4 bg-blue-400 text-white shadow-lg sticky top-0 rounded">
            <h1 className="text-lg font-semibold">
                <Link to='/'>Context Api</Link>
            </h1>
            <ul className="flex justify-around text-2xl list-none  w-1/2">
                <li className="text-white hover:text-gray- cursor-pointer">
                    <Link to='/'>Home</Link>
                </li>
                <li className="text-white hover:text-gray- cursor-pointer">
                    <Link to='/cart'>Cart</Link>
                </li>
                <li className="text-white hover:text-gray- cursor-pointer">Cart Item: {cart.length}</li>
            </ul>
        </div>
    );
}

export default Navbar;
