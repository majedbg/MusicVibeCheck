// ApiContext.js
import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <ApiContext.Provider value={{ apiResponse, setApiResponse }}>
      {children}
    </ApiContext.Provider>
  );
};