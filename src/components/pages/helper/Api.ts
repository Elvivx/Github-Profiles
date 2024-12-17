import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import axios from "axios"

console.log(GitContext)
console.log(axios.create({ baseURL: `https://api.github.com`, headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_CLIENT_ID}` } }))
const { dispatch } = useContext(GitContext)

const getUsers = async () => {
  try {
    dispatch({ type: "searchError", payload: "" })
    dispatch({ type: "users", payload: [] })
    dispatch({ type: "isLoading" })
    const user = await axios.get(`https://api.github.com/search/users?q=${state.text}`)

    if (user.data.items.length < 1) {
      throw new Error("No User with username")
    }

    dispatch({ type: "users", payload: user.data.items })
    dispatch({ type: "typing", payload: "" })
    dispatch({ type: "loaded" })
  } catch (error) {
    dispatch({ type: "loaded" })
    dispatch({ type: "searchError", payload: error.message })
  }
}

const userInfo = async (info) => {
  dispatch({ type: "isLoading" })
  const user = await axios.get(`https://api.github.com/users/${info}?client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)
  dispatch({ type: "user", payload: user.data })
  await userRepo(info)
  await userStarred(info)
  dispatch({ type: "loaded" })
}

const userRepo = async (info) => {
  try {
    dispatch({ type: "repoError", payload: "" })
    const repos = await axios.get(`https://api.github.com/users/${info}/repos?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)

    if (repos.data.length < 1) {
      throw new Error("No Repos Found")
    }
    dispatch({ type: "repos", payload: repos.data })
  } catch (error) {
    dispatch({ type: "repoError", payload: error.message })
  }
}

const userStarred = async (info) => {
  try {
    dispatch({ type: "starredError", payload: "" })
    const starred = await axios.get(`https://api.github.com/users/${info}/starred?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)

    if (starred.data.length < 1) {
      throw new Error("No Starred Repos Found")
    }
    dispatch({ type: "starred", payload: starred.data })
  } catch (error) {
    dispatch({ type: "starredError", payload: error.message })
  }
}
