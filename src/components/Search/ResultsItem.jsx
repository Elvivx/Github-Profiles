import { useNavigate } from "react-router"
import { GitContext } from "../context/contexts"
import { useContext } from "react"
import { motion } from "framer-motion"
import { Bookmark } from "lucide-react"
import PropTypes from "prop-types"

function ResultItem({ user }) {
  const { dispatch, userInfo } = useContext(GitContext)
  const navigate = useNavigate()
  const click = (e) => {
    e.preventDefault()
    userInfo(e.currentTarget.id)
    dispatch({ type: "curUser", payload: e.currentTarget.id })
    navigate(`/profile`)
  }

  return (
    <motion.div whileHover={{ scale: 1.05, borderRadius: 0 }} className='result' onClick={click} id={user.login}>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
        <Bookmark />
      </div>
      <h1>{user.login}</h1>
    </motion.div>
  )
}

ResultItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ResultItem
