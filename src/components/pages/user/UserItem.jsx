import UserRepos from "./userRepos"
import UserStarred from "./userStarred"
import Loader from "../helper/Loader"
import { useEffect } from "react"
function UserItem({ user, userStarreds, userRepos, commits, getCommits, nav, btnNavs, loading }) {
  useEffect(() => {
    document.title = user.name || user.login
  }, [])
  console.log(nav, btnNavs, userRepos, userStarreds)
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
            <span>Followers: {user.followers || "N/A"}</span>
            <span>Following: {user.following || "N/A"}</span>
            <span>Repos: {user.public_repos || "N/A"}</span>
            <span>Starred: {userStarreds.length || "N/A"}</span>
          </div>
        </div>
        <div className='bottom'>
          <div className='nav'>
            <button onClick={btnNavs} value='repos' style={nav ? { borderBottom: "2px solid #ff6500" } : {}}>
              Repos
            </button>
            <button onClick={btnNavs} value='starred' style={!nav ? { borderBottom: "2px solid #ff6500" } : {}}>
              Starred
            </button>
          </div>
          <div className='nav-info'>
            {loading && <Loader />}
            {!loading && nav && <UserRepos />}
            {!loading && !nav && <UserStarred />}
            {/* {loading ? <Loader /> : nav ? userRepos.map((repo) => <UserRepos key={repo.id} repo={repo} />) : userStarreds.map((star) => <UserStarred key={star.id} star={star} />)} */}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
