import { useState } from 'react'

export default function SearchForGif() {
  // setting up the gif form state
  const [gifFormState, setGifFormState] = useState('')

  // when the user makes a change in the search bar
  function handleChange(e) {
    console.log(gifFormState)
    setGifFormState(e.target.value)
  }

  // when the user hits the submit button
  function handleSubmit(e) {
    e.preventDefault()

    getGif(gifFormState)
  }

  return (
    <form>
      <input type="text" onChange={handleChange} value={gifFormState} />
      <button onSubmit={handleSubmit}>SEARCH</button>
    </form>
  )
}
