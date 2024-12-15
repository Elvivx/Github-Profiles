import { useContext, useEffect } from "react"
import { GitContext } from "../../context/contexts"

export function localStore() {
  const {
    state: { recentSearches },
  } = useContext(GitContext)
  console.log(recentSearches)
  //   if (recentSearches.length == 0) return
  const store = localStorage.setItem("recentSearches", [recentSearches])

  const storeVal = window.localStorage.getItem("recentSearches")
  //   const vals = JSON.parse(storeVal)
  console.log(storeVal)
}
// useEffect(()=>)
