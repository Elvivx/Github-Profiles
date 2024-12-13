import axios from "axios"
import { createContext, useReducer, useState } from "react"
import Reducer from "../pages/helper/Reducer"
export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  // states
  // const [page, setPages] = useState(true)
  // const [text, setText] = useState("")
  // const [users, setUsers] = useState("")
  // const [user, setUser] = useState([])
  // const [commits, setCommits] = useState("")
  // const [userRepos, setUserRepos] = useState([])
  // const [userStarreds, setUserStarreds] = useState([])
  // const [userLangs, setUserLangs] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [nav, setNav] = useState(true)

  // Reducer state
  const initialStates = {
    // states
    requests: "",
    text: "",
    searchedUsers: [],
    user: "",
    commits: [],
    userRepos: [],
    userStarreds: [],
    loading: false,
    nav: true,
    // api
    api_url: "https://api.github.com",
    // keys
    cliente_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    cliente_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    limite_repositorios: 10,
  }
  const [state, dispatch] = useReducer(Reducer, initialStates)

  console.log(state)

  // functions

  // user
  const getUsers = async () => {
    console.log(state.text)
    if (state.text == "") return
    // setLoading(true)
    dispatch({ type: "isLoading" })
    const user = await axios.get(`https://api.github.com/search/users?q=${state.text}`)
    // setUsers(user.data.items)
    dispatch({ type: "users", payload: user.data.items })
    setTimeout(() => {
      // setLoading(false)
      dispatch({ type: "loaded" })
    }, 3000)
  }

  // user informations
  const userInfo = async (info) => {
    try {
      setLoading(true)
      dispatch({ type: "isLoading" })
      const user = await axios.get(`https://api.github.com/users/${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)

      setUser(user.data)
      dispatch({ type: "user", payload: user.data })

      await userRepo(info)
      await userStarred(info)
      setLoading(false)
      dispatch({ type: "loaded" })
    } catch (error) {
      dispatch({ type: "error", payload: error.message })
    }
  }
  // respos function
  const userRepo = async (info) => {
    // user Repositories
    try {
      const repos = await axios.get(`https://api.github.com/users/${info}/repos?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
      setUserRepos(repos.data)
      dispatch({ type: "repos", payload: repos.data })
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }
  // starred fucntion
  const userStarred = async (info) => {
    // user starred repositories
    try {
      const starred = await axios.get(`https://api.github.com/users/${info}/starred?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
      setUserStarreds(starred.data)
      dispatch({ type: "starred", payload: starred.data })
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }

  // nav for repos and starred
  const navs = (e) => {
    return e.target.value == "repos" ? dispatch({ type: "nav" }) : setNav(false)
  }
  // button to go home or user
  const flipPage = (ans) => {
    nav && setPages(true)
    setPages(ans)
    dispatch({ type: "page" })
  }
  // contexts exports
  const vals = {
    // text,
    // setText,
    // users,
    // setUsers,
    // user,
    // setUser,
    // loading,
    getUsers,
    // userInfo,
    // userStarreds,
    // userRepos,
    // commits,
    // setCommits,
    // nav,
    // navs,
    // page,
    // flipPage,
    state,
    dispatch,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
