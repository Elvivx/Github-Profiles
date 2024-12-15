import axios from "axios"
import { createContext, useReducer, useState } from "react"
import Reducer from "../pages/helper/Reducer"
// import { userInfo, getUsers } from "../pages/helper/Api"
// import { getUsers } from "../pages/helper/Api"
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
    recentSearches: [],
    user: [],
    curUser: "",
    users: [],
    commits: [],
    userRepos: [],
    userStarreds: [],
    loading: false,
    nav: "starred",
    btnNav: true,
    page: true,

    // api
    api_url: "https://api.github.com",
    // keys
    cliente_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    cliente_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    limite_repositorios: 10,
  }
  const [state, dispatch] = useReducer(Reducer, initialStates)

  // console.log(state)

  // functions

  // user
  const getUsers = async () => {
    dispatch({ type: "isLoading" })
    const user = await axios.get(`https://api.github.com/search/users?q=${state.text}`)
    dispatch({ type: "users", payload: user.data.items })
    dispatch({ type: "typing", payload: "" })
    dispatch({ type: "loaded" })
  }

  // user informations
  const userInfo = async (info) => {
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
      dispatch({ type: "loaded" })
    } catch (error) {
      console.log(error)
      dispatch({ type: "error", payload: error.message })
    }
  }
  // respos function
  const userRepo = async (info) => {
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
  const userStarred = async (info) => {
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

  // nav for repos and starred
  const btnNavs = (e) => {
    let btns = e.currentTarget.childNodes

    btns.forEach((btn) => btn.classList.remove("active"))
    e.target.classList.add("active")
    // e.target.value == "repos" && dispatch({ type: "nav", payload: e.target.value })
    // e.target.value == "starred" && dispatch({ type: "nav", payload: e.target.value })
    // e.target.value == "stats" && dispatch({ type: "nav", payload: e.target.value })
  }
  // button to go home or user
  const flipPage = (ans) => {
    // nav && setPages(true)
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
    userInfo,
    // userStarreds,
    // userRepos,
    // commits,
    // setCommits,
    // nav,
    btnNavs,
    // page,
    // flipPage,
    state,
    dispatch,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
