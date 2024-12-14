import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import { StepBack } from "lucide-react"
import UserItem from "./UserItem"
function User() {
  const {
    state: { user, userStarreds, userRepos, commits, nav, navs, loading, curUser },
    userInfo,
  } = useContext(GitContext)
  const back = () => {
    flipPage(true)
    document.title = `Github Profiles`
  }
  // console.log(curUser + "fuck")
  // console.log(userStarreds)

  // userInfo(curUser)
  return (
    <>
      <div className='user'>
        <button className='back' onClick={back}>
          <span>
            <StepBack />
          </span>
        </button>
        <UserItem user={user} userStarreds={userStarreds} userRepos={userRepos} nav={nav} navs={navs} loading={loading} commits={commits} />
      </div>
    </>
  )
}
export default User
