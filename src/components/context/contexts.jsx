import axios from "axios"
import { createContext, useState } from "react"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  // states
  const [page, setPages] = useState(true)
  const [text, setText] = useState("")
  const [users, setUsers] = useState("")
  const [user, setUser] = useState([])
  const [commits, setCommits] = useState("")
  const [userRepos, setUserRepos] = useState([])
  const [userStarreds, setUserStarreds] = useState([])
  // const [userLangs, setUserLangs] = useState([])
  const [loading, setLoading] = useState(false)
  const [nav, setNav] = useState(true)

  // keys
  const cliente_id = import.meta.env.VITE_GITHUB_CLIENT_ID
  const cliente_secret = import.meta.env.VITE_GITHUB_CLIENT_SECRET
  const limite_repositorios = 10

  // fuctions

  // user
  const getUsers = async () => {
    if (text == "") return
    setLoading(true)
    const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
    setUsers(user.data.items)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  // user informations
  const userInfo = async (info) => {
    setLoading(true)
    const user = await axios.get(`https://api.github.com/users/${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)

    setUser(user.data)

    await userRepo(info)
    await userStarred(info)
    setLoading(false)
  }
  // respos function
  const userRepo = async (info) => {
    // user Repositories
    try {
      const repos = await axios.get(`https://api.github.com/users/${info}/repos?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
      setUserRepos(repos.data)
    } catch (error) {
      console.log(error)
    }
  }
  // starred fucntion
  const userStarred = async (info) => {
    // user starred repositories
    try {
      const starred = await axios.get(`https://api.github.com/users/${info}/starred?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
      setUserStarreds(starred.data)
    } catch (error) {
      console.log(error)
    }
  }

  // nav for repos and starred
  const navs = (e) => {
    return e.target.value == "repos" ? setNav(true) : setNav(false)
  }
  // button to go home or user
  const flipPage = (ans) => {
    nav && setPages(true)
    setPages(ans)
  }
  // contexts exports
  const vals = {
    text,
    setText,
    users,
    setUsers,
    user,
    setUser,
    loading,
    getUsers,
    userInfo,
    userStarreds,
    userRepos,
    commits,
    setCommits,
    nav,
    navs,
    page,
    flipPage,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
