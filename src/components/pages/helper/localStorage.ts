import { useContext, useEffect, useState } from "react"
import { GitContext } from "../../context/contexts"

export function useLocalStorage(key: string, item) {
  // const {
  //   state: { recentSearches },
  // } = useContext(GitContext)

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
  }, [key, value])

  return [value, setValue]
  // const storeVal = localStorage.getItem("recentSearches")
  // console.log(storeVal)
}
