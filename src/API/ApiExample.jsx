// src/ApiExample.js
import React, { useState, useEffect } from 'react';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching the data. Please try again later.');
        setLoading(false); 
      }
    };
    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Danh sách các nước</h1>
      {loading ? (
        <p>Đang tải...</p> 
      ) :   error ? (
        <p>{error}</p>
      ) :(
        <ul>
          {data.map((country, index) => (
            <li key={index}>
              <h2>{country.name.common}</h2>
              <p>Thủ đô: {country.capital ? country.capital[0] : 'N/A'}</p>
              <p>Châu lục: {country.region}</p>
              <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="50" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;
