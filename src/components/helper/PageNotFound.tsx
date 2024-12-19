import React from "react"
import { useNavigate } from "react-router"
import img from "../../../public/notFound.png"
function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <div className='notFound'>
        <img src={img} alt='page not Found' />
        <button onClick={() => navigate(`/`)}>Go Back</button>
      </div>
    </>
  )
}
export default NotFound
