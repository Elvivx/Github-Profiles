import { createContext, useReducer } from "react"
import Reducer from "../pages/helper/Reducer"
import PropTypes from "prop-types"
import ApiCalls from "../pages/helper/Api"

export const GitContext = createContext(null)
export const GitContextProvider = ({ children }) => {
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
    nav: "repos",
    btnNav: true,
    theme: "",
    // errorMessages
    reposErrorMessage: "",
    starredErrorMessage: "",
    searchErrorMessage: "",
    // keys
    cliente_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    cliente_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    limite_repositorios: 10,
  }

  const [state, dispatch] = useReducer(Reducer, initialStates)
  const { getUsers, userInfo } = ApiCalls(state, dispatch)

  // nav for repos and starred
  const btnNavs = (e) => {
    let btns = e.currentTarget.childNodes
    if (!e.target.value) return
    const value = e.target.value
    btns.forEach((btn) => btn.classList.remove("active"))
    e.target.classList.add("active")

    if (["repos", "starred", "stats"].includes(value)) {
      dispatch({ type: "nav", payload: value })
    }
  }

  const vals = {
    getUsers,
    userInfo,
    btnNavs,
    state,
    dispatch,
  }

  return <GitContext.Provider value={vals}>{children}</GitContext.Provider>
}
GitContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// document.addEventListener("contextmenu", (e) => e.preventDefault())
