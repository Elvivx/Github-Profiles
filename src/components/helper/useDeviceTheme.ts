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

export default useDeviceTheme
