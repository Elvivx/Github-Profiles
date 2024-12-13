import { GitContext } from "../../context/contexts"
import { useContext } from "react"
const { text } = useContext(GitContext)
console.log(text)
console.log(GitContext)
