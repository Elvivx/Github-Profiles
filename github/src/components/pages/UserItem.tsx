// import { GitFork, GitCommit, GitBranch } from "lucide-react"
import UserRepos from "./userRepos"
function UserItem({ user, userStarred, userRepos }) {
  return (
    <>
      <div className='item'>
        <div className='top'>
          <div className='img'>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <h1>{user.name}</h1>
          <p>
            <strong>Location: </strong>
            {user.location || "N/A"}
          </p>
          <p>
            <strong>Username: </strong>
            {user.login}
          </p>
          <p className='bio'>
            <strong>Bio: </strong>
            {user.bio}
          </p>
          <p className='email'>
            <strong>Email: </strong>
            {user.email || "N/A"}
          </p>
          <div className='btns'>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>
            <span>Starred: {userStarred.length}</span>
            <span>Commits</span>
          </div>
        </div>
        <div className='bottom'>
          <div className='nav'>
            <button>Repos</button>
            <button>Starred</button>
            <button>Languages</button>
          </div>
          <div className='nav-info'>
            {/* <div className='info'>
              <a href='fuck'>
                <h2>Repos</h2>
                <p>React</p>
                <p>12 dec 2020</p>
                <div className='xtra'>
                  <span>
                    <span className='icon'>
                      <GitFork />
                    </span>
                    32
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
            </div> */}
            {userRepos.map((repo) => (
              <UserRepos key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
