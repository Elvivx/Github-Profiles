import React from "react"
import { Clock } from "lucide-react"

function Recents() {
  return (
    <div className='recents'>
      <div className='recent'>
        <div className='recent-left'>
          <div className='recent-icon'>
            <Clock />
          </div>
          <div className='recent-text'>Recent</div>
        </div>
        <div className='remove'></div>
      </div>
    </div>
  )
}
export default Recents
