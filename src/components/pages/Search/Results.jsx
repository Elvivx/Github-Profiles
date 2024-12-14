import ResultItem from "./ResultsItem"
import { useContext, useEffect } from "react"
import { GitContext } from "../../context/contexts"
import Loader from "../helper/Loader"
function Results() {
  const {
    state: { loading, users, curUser },
    dispatch,
  } = useContext(GitContext)
  // console.log(users)
  // console.log(!users.length)
  // console.log(curUser)
  // useEffect(() => {}, [curUser])
  if (!users.length) return
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
