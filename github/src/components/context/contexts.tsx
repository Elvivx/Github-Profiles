import axios from "axios"
import { createContext, useState } from "react"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  const [text, setText] = useState("")
  const [users, setUsers] = useState("")
  const [loading, setLoading] = useState(false)
  const getUsers = async () => {
    if (text == "") return
    setLoading(true)
    const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
    console.log(user.data)
    setUsers(user.data.items)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return <GitContext.Provider value={{ getUsers, text, setText, users, loading }}>{children}</GitContext.Provider>
}
const cliente_id = "82d4ed29477f68045158"
const cliente_secret = "412bc1b12514bd61b5a46df0d6aeddd993701510"

const getUserInfos = async () => {
  let data = await axios.get(`https://api.github.com/users/elvivx?client_id=${cliente_id}&client_secret=${cliente_secret}`)
  console.log(data.data)
}
getUserInfos()
