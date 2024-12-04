import { GitFork, GitCommit, GitBranch } from "lucide-react"
import Error from "../helper/Error"
function UserStarred({ star }) {
  return (
    <>
      {!star ? (
        <Error />
      ) : (
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
                  <GitBranch />
                </span>
                {star.default_branch}
              </span>
            </div>
          </a>
        </div>
      )}
    </>
  )
}
export default UserStarred
