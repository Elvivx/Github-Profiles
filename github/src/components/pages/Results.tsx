import ResultItem from "./ResultsItem"
import { useContext } from "react"
import { GitContext } from "../context/async"
function Results() {
  const { users } = useContext(GitContext)
  return (
    <>
      <div className='result'>
        {users.map((user, index) => {
          return <ResultItem key={index} user={user} />
        })}
      </div>
    </>
  )
}
export default Results
