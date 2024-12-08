import { useContext } from "react"
import { GitContext } from "../../context/contexts"

function Search() {
  const { getUsers, text, setText } = useContext(GitContext)

  // Handle input change
  const change = (e) => {
    setText(e.target.value)
  }

  // Handle form submission
  const submit = (e) => {
    e.preventDefault() // Prevent page reload
    if (text.trim()) {
      getUsers()
      // setText("") // Clear input after submit
    }
  }

  return (
    <div className='search'>
      <h1>Search for Profile 🙂</h1>
      <p>Get the repository of your favorite developer..!</p>
      <div className='input'>
        <form onSubmit={submit}>
          {/* Search Input */}
          <input
            type='text'
            placeholder='Search'
            value={text}
            onChange={change} // Update text state
          />
          {/* Submit Button */}
          <button type='submit'>
            <svg height='32' viewBox='0 0 512 512' width='32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <title>Search</title>
              <path
                fill='white'
                d='M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z'
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
