import UserRepos from "./userRepos"
import UserStarred from "./userStarred"
import Loader from "../helper/Loader"
import { useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Error from "../helper/Error"
// import { Bookmark } from "lucide-react"
import UserStats from "./UserStats"
import { GitContext } from "../../context/contexts"

function UserItem() {
  const {
    state: { user, userStarreds, userRepos, nav, loading, reposErrorMessage, starredErrorMessage },
    dispatch,
    btnNavs,
  } = useContext(GitContext)

  useEffect(() => {
    document.title = user.name || user.login
    if (nav !== "repos") {
      dispatch({ type: "nav", payload: "repos" })
    }
  }, [user])

  // console.log(reposErrorMessage + " +" + starredErrorMessage)

  // Variants for reusable animation configurations
  const variants = {
    initial: { x: "100%", opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: "-100%", opacity: 0, scale: 0.5 },
  }

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
          <div className='nav' onClick={btnNavs}>
            <button value='repos' className='active'>
              Repos
            </button>
            <button value='starred'>Starred</button>
            <button value='stats'>Stats</button>
          </div>
          <div className='nav-info'>
            {/* <AnimatePresence>
              {loading && <Loader />}

              {!loading && nav === "repos" && reposErrorMessage && <Error error={reposErrorMessage} />}

              {!loading && nav === "starred" && starredErrorMessage && <Error error={starredErrorMessage} />}

              {!loading && nav === "repos" && !reposErrorMessage && (
                <AnimatePresence>
                  {userRepos.map((repo, i) => (
                    <motion.div
                      key={repo.id}
                      initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: i * 0.2 }}>
                      <UserRepos repo={repo} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}

              {!loading && nav === "starred" && !starredErrorMessage && (
                <AnimatePresence>
                  {userStarreds.map((star, i) => (
                    <motion.div
                      key={star.id}
                      initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: i * 0.2 }}>
                      <UserStarred key={star.id} star={star} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}

              {!loading && nav === "stats" && (
                <motion.div initial={{ x: "90%", opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }}>
                  <UserStats name={user.login} />
                </motion.div>
              )}
            </AnimatePresence> */}

            <AnimatePresence mode='wait'>
              {!loading && nav === "repos" && reposErrorMessage && (
                <motion.div key='repos-error' {...variants}>
                  <Error error={reposErrorMessage} />
                </motion.div>
              )}

              {!loading && nav === "starred" && starredErrorMessage && (
                <motion.div key='starred-error' {...variants}>
                  <Error error={starredErrorMessage} />
                </motion.div>
              )}

              {!loading && nav === "repos" && !reposErrorMessage && (
                <motion.div key='repos-list' {...variants}>
                  {userRepos.map((repo, i) => (
                    <motion.div
                      key={repo.id}
                      initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: i * 0.2 }}>
                      <UserRepos repo={repo} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!loading && nav === "starred" && !starredErrorMessage && (
                <motion.div key='starred-list' {...variants}>
                  {userStarreds.map((star, i) => (
                    <motion.div
                      key={star.id}
                      initial={{ x: i % 2 ? "90%" : "-90%", opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ delay: i * 0.2 }}>
                      <UserStarred key={star.id} star={star} />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {!loading && nav === "stats" && (
                <motion.div key='stats' {...variants}>
                  <UserStats name={user.login} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
