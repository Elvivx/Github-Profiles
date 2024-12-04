import { GitFork, GitCommit, GitBranch, Captions } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import Error from "../helper/Error"

function UserRepos({ repo }) {
  const [commits, setCommits] = useState([])
  const getCommits = async () => {
    const data = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
    setCommits(data.data)
  }
  useEffect(() => {
    getCommits()
  }, [])
  return (
    <>
      {!repo ? (
        <Error />
      ) : (
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
                {commits.length || 0}
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
      )}
    </>
  )
}
export default UserRepos
