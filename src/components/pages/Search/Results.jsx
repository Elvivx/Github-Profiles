import ResultItem from "./ResultsItem"
import { useContext, useEffect } from "react"
import { GitContext } from "../../context/contexts"
import { motion } from "framer-motion"
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
            return (
              <motion.div key={index} initial={{ y: index % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} transition={{ delay: index * 0.2 }}>
                <ResultItem user={user} i={index} />
              </motion.div>
            )
          })
        )}
      </div>
    </>
  )
}
export default Results
