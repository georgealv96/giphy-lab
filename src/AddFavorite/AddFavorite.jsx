import { useState } from 'react'

export default function AddFavorite(props) {
  const [favoriteGifs, setFavoriteGifs] = useState([])
  function handleClick() {
    setFavoriteGifs([...favoriteGifs, props.gif])
    props.getFavoriteList(favoriteGifs)
  }

  return <button onClick={handleClick}>Add to My Favorites</button>
}
