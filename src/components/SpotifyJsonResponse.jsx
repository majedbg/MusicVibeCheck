import React, { useContext } from 'react';
import { ApiContext } from '../hooks/ApiContext';
import '../App.css';
const SpotifyJsonResponse = () => {
  const { apiResponse } = useContext(ApiContext);
  return (
    <div className='jsonResponse'>
      {apiResponse ? (
        <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default SpotifyJsonResponse;