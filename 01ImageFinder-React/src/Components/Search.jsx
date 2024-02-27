import React, { useState } from 'react'
import { useImageContext } from '../Context/Context'

function Search() {
    const [input, setInput] = useState('')
    const {findBtn} = useImageContext();

    const handleBtn = () => {
        findBtn(input);
        setInput('')
    }
  return (
    <div className='flex justify-center items-center mt-5 '>
      <input className='className="border border-green-500 focus:border-transparent focus:outline mr-3 p-2 rounded-md shadow-md"' type="text" placeholder='Find Images' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button className='bg-green-500 px-1 text-lg rounded-md shadow-md text-white outline-none' onClick={handleBtn}>Find</button>
    </div>
  )
}

export default Search
