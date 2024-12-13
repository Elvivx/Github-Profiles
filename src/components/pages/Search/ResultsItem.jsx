import { Link } from "react-router"
import { GitContext } from "../../context/contexts"
import { useContext } from "react"
function ResultItem({ user }) {
  const { state, dispatch, userInfo } = useContext(GitContext)
  return (
    <Link to={`/profile`}>
      <div
        className='result'
        onClick={() => {
          userInfo(user.login)
          // flipPage(false)
          // dispatch({ type: "page" })
        }}>
        <div className='img'>
          <img src={user.avatar_url} alt={user.login} />
        </div>
        <h1>{user.login}</h1>
      </div>
    </Link>
  )
}

export default ResultItem
