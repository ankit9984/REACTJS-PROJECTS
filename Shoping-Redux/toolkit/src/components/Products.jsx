import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../redux/cartSlice';
import Loading from './Loading';

function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if(!response.ok){
                    throw new Error('Something went wrong...')
                }
                const data = await response.json();
                setProducts(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }finally{
                setLoading(false)
            }
        }
        fetchProducts();
    },[])

    if(loading){
        return <Loading/>
    }

    const handleAddCart = (item) =>{
        dispatch(addToCart(item))
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button onClick={() => handleAddCart(item)} className="bg-blue-500 rounded text-white py-2 px-4 mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Add to Cart</button>
        </div>
    ))}
</div>
  )
}

export default Products
