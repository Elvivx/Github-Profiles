import { useContext } from "react"
import { GitContext } from "../context/contexts"
import UserItem from "./UserItem"
function User() {
  const { user, userStarred, userRepos } = useContext(GitContext)
  return (
    <>
      <div className='user'>
        <UserItem user={user} userStarred={userStarred} userRepos={userRepos} />
      </div>
    </>
  )
}
export default User
