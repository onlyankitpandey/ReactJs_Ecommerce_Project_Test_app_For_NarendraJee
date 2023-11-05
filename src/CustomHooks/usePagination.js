import { useState, useEffect } from 'react';
import axios from 'axios';


async function fetchDataFromAPI(apiUrl, start, limit) {
  try {
    const response = await axios.get(`${apiUrl}?skip=${start}&limit=${limit}`);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const usePaginatedData = (apiUrl, start, limit,selectedWithStart) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    setIsLoading(true)
    if(selectedWithStart){
      setProductList([])
    }
    const responseData = fetchDataFromAPI(apiUrl, start, limit).then((data) => {
      setIsLoading(false)
      setData(data.data)
      setProductList((prev) => {
        if (Array.isArray(prev)) {
          return [...prev, ...data.data.products];
        } else {
          return [...data.data.products];
        }
      });
    });
    setIsLoading(false)
  }, [apiUrl, start, limit]);

  
  return { data, productList, isLoading };
};

export default usePaginatedData;
