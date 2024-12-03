import { GitFork, GitCommit, GitBranch } from "lucide-react"
function UserItem() {
  return (
    <>
      <div className='item'>
        <div className='top'>
          <div className='img'>
            <img src='#' alt='' />
          </div>
          <h1>Elvis</h1>
          <p className='bio'>Hey there</p>
          <p className='email'>ELvis@maail.co</p>
          <div className='btns'>
            <span>Followers</span>
            <span>Following</span>
            <span>Repos</span>
            <span>Stared</span>
            <span>Commits</span>
          </div>
        </div>
        <div className='bottom'>
          <div className='nav'>
            <button>Repos</button>
            <button>Stars</button>
            <button>Languages</button>
          </div>
          <div className='nav-info'>
            <div className='info'>
              <h2>Repos</h2>
              <p>React</p>
              <p>12 dec 2020</p>
              <div className='xtra'>
                <span>
                  <GitFork />
                  32
                </span>
                <span>
                  <GitCommit />
                  44
                </span>
                <span>
                  <GitBranch />
                  master
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
