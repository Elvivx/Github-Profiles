import React from "react"
import { Clock, X } from "lucide-react"

function Recents({ text, setText, recent }) {
  return (
    <div className='recents'>
      {recent.map((item) => (
        <div className='recent' key={item}>
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
      ))}
    </div>
  )
}
export default Recents
