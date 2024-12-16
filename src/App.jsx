import { GitContextProvider } from "./components/context/contexts"
import Home from "./components/Home"
import "./assets/scss/App.scss"
import { BrowserRouter, Routes, Route } from "react-router"
import Profile from "./components/Profile"

function App() {
  return (
    <GitContextProvider>
      <BrowserRouter>
        <section className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </section>
      </BrowserRouter>
    </GitContextProvider>
  )
}

export default App
