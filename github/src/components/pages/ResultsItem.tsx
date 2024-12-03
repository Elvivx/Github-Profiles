// import PropTypes from "prop-types"
function ResultItem({ user }) {
  // ResultItem.propTypes = {
  //   user: PropTypes.shape({
  //     avatar_url: PropTypes.string.isRequired,
  //     login: PropTypes.string.isRequired,
  //     bio: PropTypes.string,
  //     location: PropTypes.string,
  //     followers: PropTypes.number,
  //     following: PropTypes.number,
  //     public_repos: PropTypes.number,
  //     public_gists: PropTypes.number,
  //     html_url: PropTypes.string.isRequired,
  //   }).isRequired,
  // }
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
