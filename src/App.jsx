
import './App.css'
import { ApiProvider } from './hooks/ApiContext';

import SpotifyView from './components/SpotifyView'
import SideNav from './components/SideNav'

function App() {
  return (
    <ApiProvider>
      <div className='PageLayout'>
        <SideNav/>
      <SpotifyView/>
      </div>
    </ApiProvider>
  )
}

export default App
