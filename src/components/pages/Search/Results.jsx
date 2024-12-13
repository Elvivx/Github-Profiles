import ResultItem from "./ResultsItem"
import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import Loader from "../helper/Loader"
function Results() {
  const {
    state: { loading, users },
    dispatch,
  } = useContext(GitContext)
  if (users == "") return
  console.log(users)
  return (
    <>
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
