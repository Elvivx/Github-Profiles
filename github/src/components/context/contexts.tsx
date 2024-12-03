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
