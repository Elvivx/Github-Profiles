import { GitFork, GitCommit, GitBranch } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import PropTypes from "prop-types"

function UserRepos({ repo }) {
  const [commits, setCommits] = useState("")
  const getCommits = async () => {
    const data = await axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`)
    setCommits(data.data)
  }
  useEffect(() => {
    getCommits()
  }, [])
  return (
    <>
      <motion.div className='info'>
        <a href={repo.html_url} target='blank'>
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
      </motion.div>
    </>
  )
}
UserRepos.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
    updated_at: PropTypes.string.isRequired,
    forks: PropTypes.number.isRequired,
    default_branch: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
export default UserRepos
