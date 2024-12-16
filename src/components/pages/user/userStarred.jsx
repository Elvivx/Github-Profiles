import { GitFork, GitBranch } from "lucide-react"
import PropTypes from "prop-types"
function UserStarred({ star }) {
  return (
    <>
      {
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
      }
    </>
  )
}
export default UserStarred
UserStarred.propTypes = {
  star: PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
    updated_at: PropTypes.string.isRequired,
    forks: PropTypes.number.isRequired,
    default_branch: PropTypes.string.isRequired,
  }).isRequired,
}
