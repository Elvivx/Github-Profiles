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
          <p>
            <strong>Location:</strong>
            Lag
          </p>
          <p>
            <strong>Username:</strong>
            Elvivx
          </p>
          <p className='bio'>
            <strong>Bio:</strong>
            Hey there
          </p>
          <p className='email'>
            <strong>Email:</strong>
            ELvis@maail.co
          </p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
