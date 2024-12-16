// import { GitContextProvider } from "./components/context/contexts"
// import Home from "./components/Home"
// import "./assets/scss/App.scss"
// import { BrowserRouter, Routes, Route } from "react-router"
// import Profile from "./components/Profile"
// import { AnimatePresence } from "framer-motion"

// function App() {
//   return (
//     <GitContextProvider>
//       <AnimatePresence mode='popLayout'>
//         <BrowserRouter>
//           <section className='main'>
//             <Routes>
//               <Route path='/' element={<Home key='home' />} />
//               <Route path='/profile' element={<Profile key='profile' />} />
//             </Routes>
//           </section>
//         </BrowserRouter>
//       </AnimatePresence>
//     </GitContextProvider>
//   )
// }

// export default App

import { GitContextProvider } from "./components/context/contexts"
import Home from "./components/Home"
import "./assets/scss/App.scss"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Profile from "./components/Profile"
import { AnimatePresence, motion } from "framer-motion"

function App() {
  return (
    <GitContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GitContextProvider>
  )
}

function AppRoutes() {
  const location = useLocation()

  // Variants for route transitions
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { type: "spring", duration: 0.1 },
  }

  return (
    <section className='main'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.5 }}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/profile'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.5 }}>
                <Profile />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </section>
  )
}

export default App
