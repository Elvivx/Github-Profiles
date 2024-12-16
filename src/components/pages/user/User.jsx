import { useContext, useEffect } from "react"
import { GitContext } from "../../context/contexts"
import { StepBack } from "lucide-react"
import UserItem from "./UserItem"
import { useNavigate } from "react-router"
function User() {
  const navigate = useNavigate()
  const back = () => {
    navigate(`/`)
    document.title = `Github Profiles`
  }
  return (
    <>
      <div className='user'>
        <button className='back' onClick={back}>
          <span>
            <StepBack />
          </span>
        </button>
        <UserItem />
      </div>
    </>
  )
}
export default User
