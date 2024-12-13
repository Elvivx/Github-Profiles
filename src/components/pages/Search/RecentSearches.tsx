import React from "react"
import { Clock, X } from "lucide-react"

function Recents({ text, setText, recents }) {
  console.log(recents)
  return (
    <div className='recents'>
      {recents.map((item: string) => (
        <div className='recent' key={item}>
          <div className='recent-left'>
            <div className='recent-icon'>
              <Clock />
            </div>
            <div className='recent-text'>{item}</div>
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
