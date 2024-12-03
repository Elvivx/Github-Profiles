import { GitFork, GitCommit, GitBranch } from "lucide-react"
function UserStarred({ repo }) {
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
              44
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
export default UserStarred
