import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          mode: 'cors'
        });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        const formattedJson = json.products.map((item) => ({
          ...item,
          id: uuidv4()
        }));
        setIsLoading(false);
        setProducts(formattedJson);
        // setFilteredProducts(formattedJson);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { products, isLoading, error };
};
