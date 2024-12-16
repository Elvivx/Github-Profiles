import { useContext } from "react"
import { GitContext } from "../../context/contexts"

export function localStore() {
  const {
    state: { recentSearches },
  } = useContext(GitContext)

  const store = localStorage.setItem("recentSearches", recentSearches)

  const storeVal = window.localStorage.getItem("recentSearches")
}
