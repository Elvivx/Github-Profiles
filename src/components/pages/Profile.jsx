import { useContext } from "react"
import User from "../user/User"
import { GitContext } from "../context/contexts"
import NotFound from "../helper/PageNotFound"

function Profile() {
  const {
    state: { user },
  } = useContext(GitContext)

  return user.length == 0 ? <NotFound /> : <User />
}
export default Profile
