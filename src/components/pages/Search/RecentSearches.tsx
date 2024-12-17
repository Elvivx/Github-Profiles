import React, { useContext } from "react"
import { Clock, X } from "lucide-react"
import { GitContext } from "../../context/contexts"

function Recents({ clickRecent, recents }) {
  const { dispatch } = useContext(GitContext)

  const remove = (id: string) => {
    dispatch({ type: "removeRecentSearch", payload: id })
  }
  return (
    <div className='recents'>
      <button>Clear All</button>
      <div className='recent-btns'>
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
    </div>
  )
}
export default Recents
