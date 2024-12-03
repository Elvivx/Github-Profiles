import UserRepos from "./userRepos"
import UserStarred from "./userStarred"
function UserItem({ user, userStarred, userRepos, nav, navs }) {
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
            <button onClick={navs} value='repos'>
              Repos
            </button>
            <button onClick={navs} value='starred'>
              Starred
            </button>
          </div>
          <div className='nav-info'>{nav ? userRepos.map((repo) => <UserRepos key={repo.id} repo={repo} />) : userStarred.map((star) => <UserStarred key={star.id} star={star} />)}</div>
        </div>
      </div>
    </>
  )
}
export default UserItem
