import { useState } from 'react'

export default function SearchForGif(props) {
  // setting up the gif form state
  const [gifFormState, setGifFormState] = useState('')

  // when the user makes a change in the search bar
  function handleChange(e) {
    setGifFormState(e.target.value)
  }

  // when the user hits the submit button
  function handleSubmit(e) {
    e.preventDefault()
    props.getGif(gifFormState)
    setGifFormState('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={gifFormState}
        placeholder="Search GIF"
      />
      <button>SEARCH</button>
    </form>
  )
}
