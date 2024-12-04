import UserRepos from "./userRepos"
import UserStarred from "./userStarred"
import Loader from "../helper/Loader"
import Error from "../helper/Error"
function UserItem({ user, userStarreds, userRepos, commits, getCommits, nav, navs, loading }) {
  console.log(userRepos.length < 1)
  return (
    <>
      <div className='item'>
        <div className='top'>
          <div className='img'>
            <img src={user.avatar_url} alt={user.login} />
          </div>
          <h1>{user.name || "N/A"}</h1>
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
            {user.bio || "N/A"}
          </p>
          <p className='email'>
            <strong>Email: </strong>
            {user.email || "N/A"}
          </p>
          <div className='btns'>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>
            <span>Starred: {userStarreds.length}</span>
            <span>Commits : </span>
          </div>
        </div>
        <div className='bottom'>
          <div className='nav'>
            <button onClick={navs} value='repos' style={nav ? { borderBottom: "2px solid #ff6500" } : {}}>
              Repos
            </button>
            <button onClick={navs} value='starred' style={!nav ? { borderBottom: "2px solid #ff6500" } : {}}>
              Starred
            </button>
          </div>
          <div className='nav-info'>
            {loading ? (
              <Loader />
            ) : userRepos.length < 1 || userStarreds.length < 1 ? (
              <Error />
            ) : nav ? (
              userRepos.map((repo) => <UserRepos key={repo.id} repo={repo} commits={commits} getCommits={getCommits} />)
            ) : (
              userStarreds.map((star) => <UserStarred key={star.id} star={star} />)
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
