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
          <div className='btns'>
            <span>Followers</span>
            <span>Following</span>
            <span>Repos</span>
            <span>Stared</span>
            <span>Gist</span>
          </div>
        </div>
        <div className='bottom'>
          <div className='nav'>
            <button>Repos</button>
            <button>Stars</button>
            <button>Languages</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default UserItem
