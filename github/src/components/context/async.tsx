import axios from "axios"
// import { createContext, useEffect, useState } from "react"

// const userContext = createContext()
export const getUsers = async (text: string) => {
  const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
  console.log(user.data)
}
