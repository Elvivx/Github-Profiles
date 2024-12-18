import React from "react"
import { useNavigate } from "react-router"
function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <div className='notFound'>
        The page you are looking for does not exist
        <button onClick={() => navigate(`/`)}>Go Back</button>
      </div>
    </>
  )
}
export default NotFound
