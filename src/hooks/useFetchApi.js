import { useContext } from 'react';
import { ApiContext } from './ApiContext';

const useFetchApi = (url , userSecret, userId ) => {
  const { setApiResponse } = useContext(ApiContext);
  const fetchApi = async () => {
    const fetchURL = 'https://99e6-2600-4041-57b7-ff00-945b-348a-b93c-645f.ngrok-free.app/tracks';
    const reqBody = ({
      client_id: userId,
      client_secret: userSecret
    });
    // console.log(`fetch api running: url: ${url} | userSecret: ${userSecret} | userId: ${userId}`);
    // setApiResponse(`fetched api response for url ${url}, secret ${userSecret}, ID ${userId}`);
    // setApiResponse(Example1);
    // return `fetch api running: url: ${url} | userSecret: ${userSecret} | userId: ${userId}`; 
    try {
      const response = await fetch(fetchURL, {
        
        method: 'POST',
        headers: {
          // 'mode': 'no-cors',
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: userId,
          client_secret: userSecret
        })
      });
      console.log('fetch request body is: ',reqBody);
      const data = await response.json();
      console.log('fetch response is: ',data);
      setApiResponse(data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  return fetchApi;
};

export default useFetchApi;