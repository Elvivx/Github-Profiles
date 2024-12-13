// import { useEffect, useState } from "react"

import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import axios from "axios"

// function useLocalStorage(key: string, initialValue) {
//   // Initialize state with the value from localStorage or the initial value
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key)
//       return item ? JSON.parse(item) : initialValue
//     } catch (error) {
//       console.error("Error reading localStorage key:", key, error)
//       return initialValue
//     }
//   })

//   // Update localStorage whenever the storedValue changes
//   useEffect(() => {
//     try {
//       console.log(storedValue)
//       if (storedValue) return
//       window.localStorage.setItem(key, JSON.stringify(storedValue))
//     } catch (error) {
//       console.error("Error setting localStorage key:", key, error)
//     }
//   }, [key, storedValue])

//   // Return the state and the setter function
//   return [storedValue, setStoredValue]
// }

// export default useLocalStorage

const [state, dispatch] = useContext(GitContext)

// user informations
const userInfo = async (info: string) => {
  try {
    // setLoading(true)
    dispatch({ type: "isLoading" })
    const user = await axios.get(`https://api.github.com/users/${info}?client_id=${cliente_id}&client_secret=${cliente_secret}`)

    // setUser(user.data)
    dispatch({ type: "user", payload: user.data })

    await userRepo(info)
    await userStarred(info)
    // setLoading(false)
    dispatch({ type: "loaded" })
  } catch (error) {
    dispatch({ type: "error", payload: error.message })
  }
}
// respos function
const userRepo = async (info: string) => {
  // user Repositories
  try {
    const repos = await axios.get(`https://api.github.com/users/${info}/repos?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
    // setUserRepos(repos.data)
    dispatch({ type: "repos", payload: repos.data })
  } catch (error) {
    console.log(error)
    dispatch({ type: "error", payload: error.message })
  }
}
// starred fucntion
const userStarred = async (info: string) => {
  // user starred repositories
  try {
    const starred = await axios.get(`https://api.github.com/users/${info}/starred?per_page=${limite_repositorios}&client_id=${cliente_id}&client_secret=${cliente_secret}`)
    // setUserStarreds(starred.data)
    dispatch({ type: "starred", payload: starred.data })
  } catch (error) {
    console.log(error)
    dispatch({ type: "error", payload: error.message })
  }
}
