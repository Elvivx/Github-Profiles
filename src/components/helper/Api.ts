import axios from "axios"

const baseUrl = (axios.defaults.baseURL = "https://api.github.com")

const api = axios.create({
  baseURL: baseUrl,
})
function ApiCalls(state, dispatch) {
  const getUsers = async () => {
    try {
      dispatch({ type: "searchError", payload: "" })
      dispatch({ type: "users", payload: [] })
      dispatch({ type: "isLoading" })
      const user = await api.get(`/search/users?q=${state.text}`)

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

  const userInfo = async (info: string) => {
    // dispatch({ type: "isLoading" })
    const user = await api.get(`/users/${info}?client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)
    dispatch({ type: "user", payload: user.data })
    await userRepo(info)
    await userStarred(info)
    // dispatch({ type: "loaded" })
  }

  const userRepo = async (info: string) => {
    try {
      dispatch({ type: "repoError", payload: "" })
      const repos = await api.get(`/users/${info}/repos?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)

      if (repos.data.length < 1) {
        throw new Error("No Repos Found")
      }
      dispatch({ type: "repos", payload: repos.data })
    } catch (error) {
      dispatch({ type: "repoError", payload: error.message })
    }
  }

  const userStarred = async (info: string) => {
    try {
      dispatch({ type: "starredError", payload: "" })
      const starred = await api.get(`/users/${info}/starred?per_page=${state.limite_repositorios}&client_id=${state.cliente_id}&client_secret=${state.cliente_secret}`)

      if (starred.data.length < 1) {
        throw new Error("No Starred Repos Found")
      }
      dispatch({ type: "starred", payload: starred.data })
    } catch (error) {
      dispatch({ type: "starredError", payload: error.message })
    }
  }

  return { getUsers, userInfo }
}

export default ApiCalls
