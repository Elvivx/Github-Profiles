import { Link, useNavigate } from "react-router"
import { GitContext } from "../../context/contexts"
import { useContext } from "react"
import { motion } from "framer-motion"
import { Bookmark } from "lucide-react"

function ResultItem({ user, i }) {
  const { dispatch, userInfo } = useContext(GitContext)
  const navigate = useNavigate()
  const click = (e) => {
    e.preventDefault()
    userInfo(e.currentTarget.id)
    dispatch({ type: "curUser", payload: e.currentTarget.id })
    navigate(`/profile`)
  }

  return (
    // <Link to={`/profile`}>

    <motion.div whileHover={{ scale: 1.05, borderRadius: 0 }} className='result' onClick={click} id={user.login}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
        <Bookmark />
      </div>
      <h1>{user.login}</h1>
    </motion.div>
    // </Link>
  )
}

export default ResultItem
