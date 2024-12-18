import React from "react"
import PropTypes from "prop-types"
function Error({ error }) {
  return (
    <>
      <h1 className='error'>⛔{error}</h1>
    </>
  )
}
export default Error
Error.propTypes = {
  error: PropTypes.string.isRequired,
}
