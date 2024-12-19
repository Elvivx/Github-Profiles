import { useContext, useEffect, useState } from "react"
import { GitContext } from "../../context/contexts"

// const {
//   state: { recentSearches },
// } = useContext(GitContext)

function useLocalStorage(key: string, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      return JSON.parse(stored)
    }
    return initialValue
  })

  useEffect(() => {
    // const store = localStorage.setItem("recentSearches", recentSearches)
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
export default useLocalStorage
