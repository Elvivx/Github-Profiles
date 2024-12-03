import ResultItem from "./ResultsItem"
import { useContext } from "react"
import { GitContext } from "../context/contexts"
function Results() {
  const { users } = useContext(GitContext)
  if (users == "") return
  return (
    <>
      <div className='results'>
        {users.map((user, index) => {
          return <ResultItem key={index} user={user} />
        })}
      </div>
    </>
  )
}
export default Results
