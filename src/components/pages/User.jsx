import { useContext } from "react"
import { GitContext } from "../context/contexts"
import { StepBack } from "lucide-react"
import UserItem from "./UserItem"
function User() {
  const { user, userStarreds, userRepos, nav, navs, flipPage } = useContext(GitContext)
  return (
    <>
      <div className='user'>
        <button className='back' onClick={() => flipPage(true)}>
          <span>
            <StepBack />
          </span>
        </button>
        <UserItem user={user} userStarreds={userStarreds} userRepos={userRepos} nav={nav} navs={navs} />
      </div>
    </>
  )
}
export default User
