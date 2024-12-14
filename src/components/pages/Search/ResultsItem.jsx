import { Link, useNavigate } from "react-router"
import { GitContext } from "../../context/contexts"
import { useContext } from "react"
import { motion } from "framer-motion"

function ResultItem({ user, i }) {
  const { dispatch, userInfo } = useContext(GitContext)
  const navigate = useNavigate()
  const click = (e) => {
    e.preventDefault()
    userInfo(e.currentTarget.id)
    // console.log(e.currentTarget.id)
    dispatch({ type: "curUser", payload: e.currentTarget.id })
    navigate(`/profile`)
  }
  // useEffect(() => {
  // console.log(state.curUser)
  // }, [state.curUser])
  return (
    // <Link to={`/profile`}>

    <motion.div
      // initial={{ y: "10%", opacity: 0, scale: 0.5 }}
      // animate={{ y: 0, opacity: 1, scale: 1 }}
      // transition={{ duration: 0.2, ease: "easeIn" }}
      whileHover={{ scale: 1.05, borderRadius: 0 }}
      className='result'
      onClick={click}
      id={user.login}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </motion.div>
    // </Link>
  )
}

export default ResultItem
