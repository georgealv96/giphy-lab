import SearchForGif from './SearchForGif/SearchForGif'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting a state for whatever the user searches
  const [searchTerm, setSearchTerm] = useState('')

  function getGif(searchedGif) {
    setSearchTerm(searchedGif)
  }

  return (
    <>
      <h1>Discover Cool GIFS!</h1>
      <SearchForGif getGif={getGif} />
      <p>{searchTerm}</p>
    </>
  )
}

export default App
