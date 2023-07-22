import SearchForGif from './SearchForGif/SearchForGif'
import ShowGif from './ShowGif/ShowGif'
import FavoritesList from './FavoritesList/FavoritesList'
import AddFavorite from './AddFavorite/AddFavorite'
import { useState, useEffect } from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import './App.css'

function App() {
  // setting a state for whatever the user searches
  const [searchTerm, setSearchTerm] = useState('')
  const [gif, setGif] = useState('')
  const [searchButton, setSearchButton] = useState(false)

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
    setSearchButton(false)
  }, [searchButton])

  function getGif(searchedGif, val) {
    setSearchTerm(searchedGif)
    setSearchButton(val)
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <h1>Discover Cool GIFS!</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchForGif getGif={getGif} />
              {gif ? (
                <>
                  <ShowGif gif={gif} />
                  <AddFavorite />
                </>
              ) : null}
            </>
          }
        />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </>
  )
}

export default App
