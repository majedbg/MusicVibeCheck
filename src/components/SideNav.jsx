import {React, useState} from 'react'
import '../App.css'
import FetchButton from './fetchButton';

export default function SideNav() {
  const url = 'api endpoint';
  
  const [userId, setuserId] = useState('');
  const [userSecret, setuserSecret] = useState('');

  const handleChangeId = (event) => {
    setuserId(event.target.value);
  };
  const handleChangeSecret= (event) => {
    setuserSecret(event.target.value);
  };
  return (
  <div>
    <div className='sideNav'>
    <h3>Spotify User Data</h3>
    <label className='inputRow'>
      <p>SpotifyID: </p>
      <input type="text" className='inputField' value={userId} onChange={handleChangeId} />
    </label>
    <label  className='inputRow'>
      <p>SpotifySecret: </p>
      <input type="text" className='inputField' value={userSecret} onChange={handleChangeSecret} />
    </label>
    <FetchButton url={'test'} userSecret={userSecret} userId={userId} ></FetchButton>
  </div>
  <p className='devStyle'>Spotify ID: {userId}</p>
  <p className='devStyle'>Spotify Secret: {userSecret}</p>
  </div>
  
  )
}


