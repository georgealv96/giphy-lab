import SearchForGif from './SearchForGif/SearchForGif'
import ShowGif from './ShowGif/ShowGif'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting a state for whatever the user searches
  const [searchTerm, setSearchTerm] = useState('')
  const [gif, setGif] = useState('')
  const [button, setButton] = useState(false)

  useEffect(() => {
    console.log('use effect running')
    async function getGifInfo() {
      const gifUrl = `http://api.giphy.com/v1/gifs/search?api_key=iz3kuyHma6E5D1IpGrZyflhntS2cLTLH&q=${searchTerm}`
      try {
        const apiResponse = await fetch(gifUrl)
        const data = await apiResponse.json()
        console.log('data > ', data)
        console.log('length > ', data.data.length)
        setGif(
          data.data[Math.floor(Math.random() * data.data.length)].images
            .original.url
        )
      } catch (err) {
        console.log(err, ' error from api cal')
      }
    }

    getGifInfo()
    setButton(false)
  }, [button])

  function getGif(searchedGif, val) {
    setSearchTerm(searchedGif)
    setButton(val)
  }

  return (
    <>
      <nav>
        <p>Home</p>
        <p>Favorites</p>
      </nav>
      <h1>Discover Cool GIFS!</h1>
      <SearchForGif getGif={getGif} />
      {gif ? <ShowGif gif={gif} /> : null}
    </>
  )
}

export default App
