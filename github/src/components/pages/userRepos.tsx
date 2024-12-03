import { GitFork, GitCommit, GitBranch } from "lucide-react"
function UserRepos({ repo }) {
  return (
    <>
      <div className='info'>
        <a href='fuck'>
          <h2>{repo.name}</h2>
          <p>{repo.language}</p>
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
              master
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
export default UserRepos
