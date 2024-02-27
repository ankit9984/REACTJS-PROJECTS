import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const [totalMoney, setTotalMoney] = useState(0);

    useEffect(() => {
        const calculateTotalMoney = () => {
            const total = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);
            setTotalMoney(total);
        };

        calculateTotalMoney();
    }, [cart]);

    const handleRemoveCart = (productId) => {
        dispatch(removeFromCart(productId))
    };

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="flex flex-wrap -mx-4">
                        {cart.map((product) => (
                            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <img src={product.image} alt={product.title} className="w-full h-32 object-cover mb-4" />
                                    <div className="text-center">
                                        <p className="text-lg font-semibold">{product.title}</p>
                                        <h2 className="text-gray-800">${product.price}</h2>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveCart(product.id)}
                                        className="bg-red-500 text-white py-2 px-4 mt-4 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h1 className="text-xl font-semibold mb-2">Total money: ${totalMoney}</h1>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
