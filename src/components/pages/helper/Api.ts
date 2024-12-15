import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import axios from "axios"

console.log(GitContext)
function apis() {
  const { state, dispatch } = useContext(GitContext)
  // Get users
  const getUsers = async () => {
    dispatch({ type: "isLoading" })
    const user = await axios.get(`https://api.github.com/search/users?q=${state.text}`)
    dispatch({ type: "users", payload: user.data.items })
    dispatch({ type: "typing", payload: "" })
    dispatch({ type: "loaded" })
  }
  // user informations
  const userInfo = async (info: string) => {
    console.log(info)
    // console.log(state.curUser)
    // state.curUser && dispatch({ type: "curUser", payload: info })
    console.log(state.curUser)
    try {
      // setLoading(true)
      dispatch({ type: "isLoading" })
      const user = await axios.get(`https://api.github.com/users/${info}?client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)

      // setUser(user.data)
      console.log(user)
      dispatch({ type: "user", payload: user.data })
      console.log(state.user)
      await userRepo(info)
      await userStarred(info)
      // await dispatch({ type: "repos", payload: info })
      // await dispatch({ type: "starred", payload: info })
      // setLoading(false)
      dispatch({ type: "loaded" })
      // useNavigate(`/profile`)
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }
  // respos function
  const userRepo = async (info: string) => {
    // user Repositories
    try {
      const repos = await axios.get(`https://api.github.com/users/${info}/repos?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)
      // setUserRepos(repos.data)
      dispatch({ type: "repos", payload: repos.data })
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }
  // starred fucntion
  const userStarred = async (info: string) => {
    // user starred repositories
    try {
      const starred = await axios.get(`https://api.github.com/users/${info}/starred?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)
      // setUserStarreds(starred.data)
      dispatch({ type: "starred", payload: starred.data })
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }
}
// export { userInfo, getUsers }
