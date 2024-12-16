import ResultItem from "./ResultsItem"
import { useContext } from "react"
import { GitContext } from "../../context/contexts"
import { motion } from "framer-motion"
import Loader from "../helper/Loader"
import Error from "../helper/Error"
function Results() {
  const {
    state: { loading, users, searchErrorMessage },
  } = useContext(GitContext)
  console.log(searchErrorMessage)

  return (
    <>
      <div className='results'>
        {loading && <Loader />}
        {searchErrorMessage ? (
          <Error errorMessage={searchErrorMessage} />
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
