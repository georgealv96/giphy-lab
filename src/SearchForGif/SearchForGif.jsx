import { useState } from 'react'

export default function SearchForGif() {
  // setting up the gif form state
  const [gifFormState, setGifFormState] = useState('')

  // when the user makes a change in the search bar
  function handleChange(e) {
    console.log(e.target.value)
    setGifFormState(e.target.value)
  }
  return (
    <form>
      <input type="text" onChange={handleChange} value={gifFormState} />
      <button>SEARCH</button>
    </form>
  )
}
