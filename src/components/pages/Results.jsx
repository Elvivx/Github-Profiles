import ResultItem from "./ResultsItem"
import { useContext } from "react"
import { GitContext } from "../context/contexts"
import Loader from "./Loader"
function Results() {
  const { users, loading } = useContext(GitContext)
  if (users == "") return
  return (
    <>
      {/* <Loader /> */}
      <div className='results'>
        {loading ? (
          <Loader />
        ) : (
          users.map((user, index) => {
            return <ResultItem key={index} user={user} />
          })
        )}
      </div>
    </>
  )
}
export default Results
