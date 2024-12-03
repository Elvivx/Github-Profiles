import { GitContext } from "../context/contexts"
import { useContext } from "react"
function ResultItem({ user }) {
  const { userInfo } = useContext(GitContext)
  return (
    <div className='result' onClick={() => userInfo(user.login)}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </div>
  )
}

export default ResultItem
