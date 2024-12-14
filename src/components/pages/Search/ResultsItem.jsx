import { Link, useNavigate } from "react-router"
import { GitContext } from "../../context/contexts"
import { useContext, useEffect } from "react"
function ResultItem({ user }) {
  const { state, dispatch, userInfo } = useContext(GitContext)
  const navigate = useNavigate()
  const click = (e) => {
    e.preventDefault()
    userInfo(e.currentTarget.id)
    console.log(e.currentTarget.id)
    dispatch({ type: "curUser", payload: e.currentTarget.id })
    navigate(`/profile`)
  }
  // useEffect(() => {
  // console.log(state.curUser)
  // }, [state.curUser])
  return (
    // <Link to={`/profile`}>

    <div className='result' onClick={click} id={user.login}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </div>
    // </Link>
  )
}

export default ResultItem
