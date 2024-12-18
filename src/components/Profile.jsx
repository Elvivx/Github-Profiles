import { useContext, useEffect } from "react"
import User from "./pages/user/User"
import { GitContext } from "./context/contexts"
import { useNavigate } from "react-router"

function Profile() {
  const navigate = useNavigate()
  const {
    state: { user },
  } = useContext(GitContext)

  useEffect(() => {
    if (user.length == 0) navigate(`/`)
  }, [])

  return <User />
}
export default Profile
