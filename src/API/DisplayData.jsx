import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setApiData(response.data);  // Lưu dữ liệu trả về từ API vào state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>API Data Display</h2>
      {apiData ? (
        <MyComponent data={apiData} />
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

const MyComponent = ({ data }) => {
  return (
    <div>
      {data.map((country, index) => (
        <div key={index}>
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          <p>Region: {country.region}</p>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="50" />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
