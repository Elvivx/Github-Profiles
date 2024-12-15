import { useContext, useEffect } from "react"
import { GitContext } from "../../context/contexts"
import { StepBack } from "lucide-react"
import UserItem from "./UserItem"
import { useNavigate } from "react-router"
function User() {
  const {
    state: { user, userStarreds, userRepos, commits, nav, loading },
    btnNavs,
  } = useContext(GitContext)

  useEffect(() => {
    if (user.length == 0) navigate(`/`)
  }, [user])

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
        <UserItem user={user} userStarreds={userStarreds} userRepos={userRepos} nav={nav} btnNavs={btnNavs} loading={loading} commits={commits} />
      </div>
    </>
  )
}
export default User
