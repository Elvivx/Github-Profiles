import { useContext, useRef, useEffect, useState } from "react"
import { GitContext } from "../../context/contexts"
import Recents from "./RecentSearches"
// import useLocalStorage from "../helper/Api"

function Search() {
  const {
    state: { text },
    dispatch,
  } = useContext(GitContext)
  // const [local, setLocal] = useLocalStorage("searches")
  const [recents, setRecents] = useState([])

  const inputRef = useRef(null)
  const [inputFocus, setInputFocus] = useState(false)

  // console.log(recents)
  // localStorage.setItem("searches", [recents])
  // focus effect
  useEffect(() => {
    const checkFocus = () => {
      if (inputRef.current === document.activeElement) {
        console.log("Input has focus!")
        recents.length !== 0 && setInputFocus(true)
      } else {
        console.log("Input does not have focus.")
        setInputFocus(false)
      }
    }

    document.addEventListener("click", checkFocus)

    return () => {
      document.removeEventListener("click", checkFocus)
    }
  }, [text])

  // Handle input change
  const change = (e) => {
    // setText(e.target.value)
    dispatch({ type: "typing", payload: e.target.value })
  }

  // Handle form submission
  const submit = (e) => {
    e.preventDefault() // Prevent page reload
    if (text.trim()) {
      setRecents((prev) => [...prev, text])
      getUsers()
      setText("") // Clear input after submit
      dispatch({ type: "typing", payload: "" })
    }
  }

  // recents click function
  const clickRecent = (e) => {
    console.log(e.target.id)
    setText(e.target.id)
    getUsers()
    console.log("fams")
  }

  return (
    <div className='search'>
      <h1>Search for Profile 🙂</h1>
      <p>Get the repository of your favorite developer..!</p>
      <div className='input'>
        <form onSubmit={submit}>
          {/* Search Input */}
          <input
            ref={inputRef}
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
      {inputFocus && <Recents text={text} setText={setText} recents={recents} clickRecent={clickRecent} />}
      {/* <Recents />
      <Recents /> */}
      <button id='elvivx' onClick={clickRecent}>
        elvivx
      </button>
    </div>
  )
}

export default Search
