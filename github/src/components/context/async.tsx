import axios from "axios"
import { createContext, useState } from "react"

export const GitContext = createContext()
export const GitContextProvider = ({ children }) => {
  const [text, setText] = useState("")
  const [users, setUsers] = useState("")
  const getUsers = async () => {
    if (text == "") return
    const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
    console.log(user.data)
    setUsers(user.data.items)
  }

  return <GitContext.Provider value={{ getUsers, text, setText, users }}>{children}</GitContext.Provider>
}
