import { useContext } from "react"
import { GitContext } from "../context/contexts"
import { StepBack } from "lucide-react"
import UserItem from "./UserItem"
function User() {
  const { user, userStarred, userRepos, nav, navs } = useContext(GitContext)
  return (
    <>
      <div className='user'>
        <button className='back'>
          <span>
            <StepBack />
          </span>
        </button>
        <UserItem user={user} userStarred={userStarred} userRepos={userRepos} nav={nav} navs={navs} />
      </div>
    </>
  )
}
export default User
