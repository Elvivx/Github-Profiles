import { GitContext } from "../../context/contexts"
import { useContext } from "react"
function ResultItem({ user }) {
  const { state, dispatch } = useContext(GitContext)
  return (
    <div
      className='result'
      onClick={() => {
        dispatch({ type: "curUser", payload: user.login })
        userInfo(user.login)
        flipPage(false)
      }}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </div>
  )
}

export default ResultItem
