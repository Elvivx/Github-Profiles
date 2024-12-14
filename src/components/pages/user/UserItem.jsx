import UserRepos from "./userRepos"
import UserStarred from "./userStarred"
import Loader from "../helper/Loader"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Bookmark, Save, Share } from "lucide-react"
function UserItem({ user, userStarreds, userRepos, nav, btnNavs, loading }) {
  useEffect(() => {
    document.title = user.name || user.login
  }, [])
  return (
    <>
      <div className='item'>
        <div className='top'>
          <div className='bookmark'>
            <Bookmark />
          </div>
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

            {!loading &&
              nav &&
              userRepos.map((repo, i) => (
                <motion.div key={repo.id} initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}>
                  <UserRepos repo={repo} />
                </motion.div>
              ))}

            {!loading &&
              !nav &&
              userStarreds.map((star, i) => (
                <motion.div key={star.id} initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}>
                  <UserStarred key={star.id} star={star} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
