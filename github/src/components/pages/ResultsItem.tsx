import { GitContext } from "../context/contexts"
import { useContext } from "react"
function ResultItem({ user }) {
  const { getUser } = useContext(GitContext)
  return (
    <div className='result' onClick={getUser}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </div>
  )
}

export default ResultItem
