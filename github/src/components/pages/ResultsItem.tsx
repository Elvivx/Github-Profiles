function ResultItem({ user }) {
  return (
    <div className='result'>
      <div className='img'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <h1>{user.login}</h1>
    </div>
  )
}

export default ResultItem
