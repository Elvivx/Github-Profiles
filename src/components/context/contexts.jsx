import axios from "axios"
import { FastForward } from "lucide-react"
import { createContext, useState } from "react"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  // states
  const [page, setPages] = useState(true)
  const [text, setText] = useState("")
  const [users, setUsers] = useState("")
  const [user, setUser] = useState([])
  const [commits, setCommits] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [userStarreds, setUserStarreds] = useState([])
  // const [userLangs, setUserLangs] = useState([])
  const [loading, setLoading] = useState(false)
  const [nav, setNav] = useState(true)
  // keys
  const cliente_id = "82d4ed29477f68045158"
  const cliente_secret = "412bc1b12514bd61b5a46df0d6aeddd993701510"

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
    setLoading(true)
    const user = await axios.get(`https://api.github.com/users/${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)
    // console.log(user.data)
    setUser(user.data)

    // user Repositories
    const repos = await axios.get(`https://api.github.com/users/${info}/repos`)
    console.log(repos.data)
    setUserRepos(repos.data)

    // user starred repositories
    const starred = await axios.get(`https://api.github.com/users/${info}/starred`)
    // console.log(starred.data)
    setUserStarreds(starred.data)

    // const commits = await axios.get(`https://api.github.com/repos/${text}/${repo}/commits`)
    // console.log(commits.data)
    // setCommits(commits.data)

    setLoading(false)
  }

  const userRepo = async (info) => {
    setLoading(true)
    // user Repositories
    const repos = await axios.get(`https://api.github.com/users/${info}/repos`)
    console.log(repos.data)
    setUserRepos(repos.data)
    setLoading(false)
  }

  const userStarred = async () => {
    setLoading(true)
    // user starred repositories
    const starred = await axios.get(`https://api.github.com/users/${info}/starred`)
    // console.log(starred.data)
    setUserStarreds(starred.data)
    setLoading(false)
  }

const getCommits = async () => {
  const data = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
  console.log(data.data)
  setCommits(data.data)
}
  const navs = (e) => {
    return e.target.value == "repos" ? setNav(true) : setNav(false)
  }
  const flipPage = (ans) => {
    nav && setPages(true)
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
    userStarreds,
    userRepos,
    getCommits,
    nav,
    navs,
    page,
    flipPage,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
