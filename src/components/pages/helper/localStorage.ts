import { useContext, useEffect, useState } from "react"
import { GitContext } from "../../context/contexts"

// const {
//   state: { recentSearches },
// } = useContext(GitContext)

function useLocalStorage(key: string, item) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    if (stored) {
      return JSON.parse(stored)
    }
    return item
  })

  useEffect(() => {
    // const store = localStorage.setItem("recentSearches", recentSearches)
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, item])

  return value
}
export default useLocalStorage
