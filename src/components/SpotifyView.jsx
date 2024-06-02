//https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

//to do:
// add props from invocation from app component
// 

import React from 'react'
import SpotifyJsonResponse from './SpotifyJsonResponse'
import GridView from './GridView'
import SpotifyFiltered from './SpotifyFiltered'

function SpotifyView() {
  return (
    <div className='SpotifyView'>
      <SpotifyJsonResponse/>
      <SpotifyFiltered/>
      <GridView/>
    </div>
  )
}

export default SpotifyView