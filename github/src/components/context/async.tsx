import axios from "axios"

export const getUsers = async (text: string) => {
  const user = await axios.get(`https://api.github.com/search/users?q=${text}`)
  console.log(user.data)
}
