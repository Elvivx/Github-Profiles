import axios from "axios"
import { createContext, useReducer } from "react"
import Reducer from "../pages/helper/Reducer"
import PropTypes from "prop-types"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  // Reducer state
  const initialStates = {
    // states
    requests: "",
    text: "",
    recentSearches: [],
    user: [],
    curUser: "",
    users: [],
    commits: [],
    userRepos: [],
    userStarreds: [],
    loading: false,
    nav: "repos",
    btnNav: true,
    theme: "",
    // // api
    // api_url: "https://api.github.com",
    reposErrorMessage: "",
    starredErrorMessage: "",
    searchErrorMessage: "",
    // keys
    cliente_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    cliente_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    limite_repositorios: 10,
  }
  const [state, dispatch] = useReducer(Reducer, initialStates)

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
    console.log(user)
    dispatch({ type: "user", payload: user.data })
    console.log(state.user)
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

  // nav for repos and starred
  const btnNavs = (e) => {
    let btns = e.currentTarget.childNodes
    if (!e.target.value) return
    btns.forEach((btn) => btn.classList.remove("active"))
    e.target.classList.add("active")
    e.target.value == "repos" && dispatch({ type: "nav", payload: e.target.value })
    e.target.value == "starred" && dispatch({ type: "nav", payload: e.target.value })
    e.target.value == "stats" && dispatch({ type: "nav", payload: e.target.value })
  }

  const vals = {
    getUsers,
    userInfo,
    btnNavs,
    state,
    dispatch,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
GitContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
