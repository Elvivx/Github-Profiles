import GithubContext from "../context/context"
function Results() {
  return (
    <>
      <GithubContext.Provider value={{}}>
        <div className='result'>
       fuck
          </div>
        </div>
      </GithubContext.Provider>
    </>
  )
}
export default Results
