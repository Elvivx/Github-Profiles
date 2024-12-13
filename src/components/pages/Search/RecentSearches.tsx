import React from "react"
import { Clock, X } from "lucide-react"

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
        <div className='x'>
          <X />
        </div>
      </div>
    </div>
  )
}
export default Recents
