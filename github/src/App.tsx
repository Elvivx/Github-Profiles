// import Search from "./components/pages/Search"
// import Results from "./components/pages/Results"
// import { Github } from "lucide-react"
import { GitContextProvider } from "./components/context/async"
import Home from "./Home"
import "./assets/scss/App.scss"
function App() {
  return (
    <GitContextProvider>
      <section className='main'>
        {/* <Github />
        <Search />
        <Results /> */}
        <Home />
      </section>
    </GitContextProvider>
  )
}

export default App
