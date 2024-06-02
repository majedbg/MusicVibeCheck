import { React , useContext } from 'react'
import '../functions/ExtractAudioFeatures'
import { ApiContext } from '../hooks/ApiContext';
import ExtractAudioFeatures from '../functions/ExtractAudioFeatures'
export default function SpotifyFiltered() {
  const { apiResponse } = useContext(ApiContext);
  
  //below variable will contain the filtered data from apiResponse
  // let sentimentList = ExtractAudioFeatures(Example1);
  
  return (
    <div>
    <div></div>
    {/* {sentimentList} */}
    </div>
  )
}

//
