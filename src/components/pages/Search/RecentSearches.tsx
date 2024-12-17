import React, { useContext, useEffect } from "react"
import { Clock, X } from "lucide-react"
import { GitContext } from "../../context/contexts"
import { useLocalStorage } from "../helper/localStorage"

function Recents({ clickRecent, recents }) {
  const {
    state: { recentSearches },
    dispatch,
  } = useContext(GitContext)

  useEffect(() => {
    const [value, setValue] = useLocalStorage("recentSearch", recentSearches)
    // setValue(recentSearches)
    console.log(value)
  }, [recentSearches])

  const remove = (id: string) => {
    dispatch({ type: "removeRecentSearch", payload: id })
  }
  return (
    <div className='recents'>
      {recents.map((item: string) => (
        <div className='recent' key={item}>
          <div className='recent-left' onClick={clickRecent} id={item}>
            <div className='recent-icon'>
              <Clock />
            </div>
            <div className='recent-text'>{item}</div>
          </div>
          <div className='x' onClick={() => remove(item)}>
            <X />
          </div>
        </div>
      ))}
    </div>
  )
}
export default Recents
