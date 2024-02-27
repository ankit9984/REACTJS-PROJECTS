import { createContext, useContext, useState, useEffect } from "react";

const imageContext = createContext();

const ImageProvider = ({ children }) => {
  const [imagesData, setImagesData] = useState([]);

  const findBtn = async (input) => {
    const apiKey = 'YOUR_API_KEY';  //https://pixabay.com/service/about/api/

    let apiUrl;
    if (input.trim() === "") {
      apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=flowers&image_type=photo`;
    } else {
      apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${input}&image_type=photo`;
    }

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      if (data.hits.length === 0) {
        alert('Data Not Found');
      } else {
        console.log(data.hits);
        setImagesData(data.hits);
        return data.hits;
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    findBtn(""); 
  }, []);

  return (
    <imageContext.Provider value={{ findBtn, imagesData }}>
      {children}
    </imageContext.Provider>
  );
};

const useImageContext = () => {
  return useContext(imageContext);
};

export { ImageProvider, useImageContext };
