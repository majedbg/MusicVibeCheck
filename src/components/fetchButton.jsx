// FetchButton.js
import React from 'react';
import useFetchApi from '../hooks/useFetchApi';

const FetchButton = (props) => {
  const {url , userSecret, userId} = props;
  const fetchApi = useFetchApi(url, userSecret, userId);
  return (
    <button className="buttonStyle" onClick={fetchApi}>
      Fetch Data
    </button>
  );
};

export default FetchButton;