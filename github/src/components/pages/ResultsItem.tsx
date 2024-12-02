function ResultItem({ user }) {
  return (
    <div className='result'>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
      <span className='bio'>This is mine</span>
      <span className='location'>
        <svg height='28' viewBox='0 0 48 48' width='28' xmlns='http://www.w3.org/2000/svg'>
          <path fill='#AE445A' d='M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z' />
          <path d='M0 0h48v48h-48z' fill='none' />
        </svg>
        Tokyo
      </span>
      <div className='info'>
        <div className='followers'>
          <p>Followers: {user.folloers_url}</p>
          {/* <span>43</span> */}
        </div>
        {/* <hr /> */}
        <div className='following'>
          <p>Following: 45</p>
          {/* <span>23</span> */}
        </div>
        <div>Repositries: 56</div>
        <div>Gist: {user.gist_url}</div>
      </div>
      <div className='btn'>
        <button>Repos</button>
        <button>Profile</button>
      </div>
    </div>
  )
}

export default ResultItem
