import { useEffect, useState } from "react"

function useLocalStorage(key: string, initialValue) {
  // Initialize state with the value from localStorage or the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error("Error reading localStorage key:", key, error)
      return initialValue
    }
  })

  // Update localStorage whenever the storedValue changes
  useEffect(() => {
    try {
      console.log(storedValue)
      if (storedValue) return
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error("Error setting localStorage key:", key, error)
    }
  }, [key, storedValue])

  // Return the state and the setter function
  return [storedValue, setStoredValue]
}

export default useLocalStorage
