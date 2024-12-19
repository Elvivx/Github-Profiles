import { useState, useEffect, useContext, useRef } from "react"
import { GitContext } from "../context/contexts"
function useDeviceTheme() {
  const { dispatch } = useContext(GitContext)
  // Initialize theme based on the device's current theme
  const getInitialTheme = () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light")
      dispatch({ type: "theme", payload: theme })
    }

    // Watch for changes in the device's theme preference
    mediaQuery.addEventListener("change", handleThemeChange)

    // Cleanup to prevent memory leaks
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange)
    }
  }, [])

  return theme
}

// export function themer() {
//   const {
//     state: { theme },
//     dispatch,
//   } = useContext(GitContext)

//   const appTheme = useDeviceTheme()
//   const app = useRef(document.querySelector("body"))
//   useEffect(() => {
//     if (theme !== "") return
//     dispatch({ type: "theme", payload: appTheme })
//   }, [theme])

//   const themeMode = () => {
//     console.log(app.current.classList)
//     if (theme === "light") {
//       app.current.classList.replace("dark", "light")
//       dispatch({ type: "theme", payload: "dark" })
//     }

//     if (theme === "dark") {
//       app.current.classList.replace("light", "dark")
//       dispatch({ type: "theme", payload: "light" })
//     }
//   }
//   return themeMode()
// }

export default useDeviceTheme
