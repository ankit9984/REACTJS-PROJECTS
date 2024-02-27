import React from 'react';
import { useImageContext } from '../Context/Context';

function Rendering() {
  const { imagesData } = useImageContext();

  return (
    <div className='flex flex-wrap justify-center'>
      {imagesData.map((data) => (
        <div key={data.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
          <div className='bg-white rounded shadow-md p-4'>
            <img src={data.webformatURL} alt='' className='w-full h-48 mb-4 object-cover rounded' />
            <div className="flex justify-center"> {/* Center the ul */}
              <ul className='list-none'>
                <li className="mr-4">View: {data.views}</li>
                <li className="mr-4">Likes: {data.likes}</li>
                <li>Download: {data.downloads}</li>
              </ul>
            </div>
            <p className='mt-2 text-center'>User: {data.user}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rendering;
