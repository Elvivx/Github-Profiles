import { motion } from "framer-motion"
function Error({ error }) {
  return (
    <>
      <motion.h1 className='error' initial={{ x: "-90%", opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }}>
        ⛔{error}
      </motion.h1>
    </>
  )
}
export default Error
