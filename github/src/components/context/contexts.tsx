import axios from "axios"
import { createContext, useState } from "react"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  // states
  const [page, setPages] = useState(true)
  const [text, setText] = useState("")
  const [users, setUsers] = useState("")
  const [user, setUser] = useState([])
  // const [commits, setCommits] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [userStarred, setUserStarred] = useState([])
  // const [userLangs, setUserLangs] = useState([])
  const [loading, setLoading] = useState(false)
  const [nav, setNav] = useState(true)
  // keys
  const cliente_id = "82d4ed29477f68045158"
  const cliente_secret = "412bc1b12514bd61b5a46df0d6aeddd993701510"
  // const limite_repositorios = 4

  // fuctions

  // user
  const getUsers = async () => {
    if (text == "") return
    setLoading(true)
    const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
    // console.log(user.data)
    setUsers(user.data.items)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  // user informations
  const userInfo = async (info) => {
    const user = await axios.get(`https://api.github.com/users/${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)
    // console.log(user.data)
    setUser(user.data)

    // user Repositories
    const repos = await axios.get(`https://api.github.com/users/${info}/repos${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)
    console.log(repos.data)
    setUserRepos(repos.data)

    // user starred repositories
    const starred = await axios.get(`https://api.github.com/users/${info}/starred`)
    // console.log(starred.data)
    setUserStarred(starred.data)

    // const commits = await axios.get(`https://api.github.com/repos/${text}/${repo}/commits`)
    // console.log(commits.data)
    // setCommits(commits.data)
  }
  const navs = (e) => {
    console.log(e.target.value)
    return e.target.value == "repos" ? setNav(true) : setNav(false)
  }
  const flipPage = (ans) => {
    setPages(ans)
  }

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
    userStarred,
    userRepos,
    nav,
    navs,
    page,
    flipPage,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
