import React from "react"
function UserStats({ name }) {
  return (
    <div className='user-stats'>
      <div>
        <img src={`https://github-readme-stats.vercel.app/api?username=${name}&show_icons=true&theme=radical`} width='100%' alt='GitHub Stats' />
      </div>
      <hr />
      <div>
        <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${name}&theme=radical`} alt='GitHub Streak' width='100%' />
      </div>
      <hr />
      <div>
        <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${name}&langs_count=6&layout=compact&theme=radical`} width='100%' />
      </div>
    </div>
  )
}
export default UserStats
