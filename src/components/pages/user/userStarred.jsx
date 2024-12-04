import { GitFork, GitCommit, GitBranch } from "lucide-react"
import { useState } from "react"
function UserStarred({ star }) {
  // const [commits, setCommits] = useState([])
  // const getCommits = async () => {
  //   const data = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
  //   console.log(data.data.length)
  //   console.log(data.data)
  //   console.log("shit")
  //   // return data.data.length
  //   setCommits(data.data)
  // }
  // useEffect(() => {
  //   getCommits()
  //   console.log(commits.length)
  // }, [])
  return (
    <>
      <div className='info'>
        <a href={star.html_url}>
          <h2>{star.name}</h2>
          <p>
            <strong>{star.language || "N/A"}</strong>
          </p>
          <p>Last updated on {star.updated_at}</p>
          <div className='xtra'>
            <span>
              <span className='icon'>
                <GitFork />
              </span>
              {star.forks}
            </span>
            <span>
              <span className='icon'>
                <GitCommit />
              </span>
              {/* {commits.length} */}
            </span>
            <span>
              <span className='icon'>
                <GitBranch />
              </span>
              {star.default_branch}
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
export default UserStarred
