import { GitFork, GitCommit, GitBranch } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
function UserRepos({ repo }) {
  const [commits, setCommits] = useState([])
  const getCommits = async () => {
    const data = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
    console.log(data.data.length)
    console.log("shit")
    // return data.data.length
    setCommits(data.data.length)
  }
  //   useEffect(() => {
  //     getCommits()
  //   }, [])
  return (
    <>
      <div className='info'>
        <a href={repo.git_url}>
          <h2>{repo.name}</h2>
          <p>
            <strong>{repo.language || "N/A"}</strong>
          </p>
          <p>Last updated on {repo.updated_at}</p>
          <div className='xtra'>
            <span>
              <span className='icon'>
                <GitFork />
              </span>
              {repo.forks}
            </span>
            <span>
              <span className='icon'>
                <GitCommit />
              </span>
              {commits}
            </span>
            <span>
              <span className='icon'>
                <GitBranch />
              </span>
              {repo.default_branch}
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
export default UserRepos
