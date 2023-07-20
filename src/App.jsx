import SearchForGif from './SearchForGif/SearchForGif'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting a state for whatever the user searches
  const [searchTerm, setSearchTerm] = useState('hello')

  useEffect(() => {
    console.log('effect running')
    async function getGifInfo() {
      const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=iz3kuyHma6E5D1IpGrZyflhntS2cLTLH&q=${searchTerm}`
      try {
        const apiResponse = await fetch(gifUrl)
        const data = await apiResponse.json()
        console.log('data > ', data)
      } catch (err) {
        console.log(err, ' error from api cal')
      }
    }

    getGifInfo()
  }, [searchTerm])

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
