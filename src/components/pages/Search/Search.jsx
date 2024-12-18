import { useContext, useRef, useEffect, useState } from "react"
import { GitContext } from "../../context/contexts"
import Recents from "./RecentSearches"
import useLocalStorage from "../helper/localStorage"

function Search() {
  const {
    state: { text, recentSearches },
    dispatch,
    getUsers,
  } = useContext(GitContext)

  const [recent, setRecent] = useLocalStorage("recentSearch", [])

  const inputRef = useRef(null)
  const [inputFocus, setInputFocus] = useState(false)

  // focus effect
  useEffect(() => {
    setInputFocus(false)
    if (recentSearches.length === 0) return
    const checkFocus = () => {
      if (inputRef.current === document.activeElement) {
        if (recentSearches.length !== 0) {
          setInputFocus(true)
        }
      } else {
        setInputFocus(false)
      }
    }
    document.addEventListener("click", checkFocus)
    return () => {
      document.removeEventListener("click", checkFocus)
    }
  }, [text, recentSearches])

  const change = (e) => {
    dispatch({ type: "typing", payload: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch({ type: "searches" })
      getUsers()
    }
  }

  const clear = () => {
    setRecent([])
    dispatch({ type: "clearSavedSearch" })
  }
  //set recent if there is recent content
  useEffect(() => {
    if (recentSearches.length !== 0) {
      setRecent(recentSearches)
    }
  }, [recent, recentSearches])

  // set recentSearches on load from localStorage
  useEffect(() => {
    if (recentSearches.length === 0) {
      dispatch({ type: "savedSearches", payload: recent })
    }
  }, [])

  const clickRecent = (e) => {
    dispatch({ type: "recentClick", payload: e.target.id })
  }

  return (
    <div className='search'>
      <h1>Search for Profile 🔍</h1>
      <p>Get the repository of your favorite developer..!</p>
      <div className='input'>
        <form onSubmit={submit}>
          <input ref={inputRef} type='text' placeholder='Search' value={text} onChange={change} />

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
      {inputFocus && <Recents recents={recentSearches} clickRecent={clickRecent} clear={clear} />}
    </div>
  )
}

export default Search
