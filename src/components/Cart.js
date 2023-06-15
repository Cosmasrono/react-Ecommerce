import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13'
        );
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Error fetching data');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : error ? (
        <li>Error: {error.message}</li>
      ) : (
        data.map((val) => <li key={val.id}>{val.id}</li>)
      )}
    </ul>
  );
};

export default Cart;
