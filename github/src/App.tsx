import Search from "./Search"
import Results from "./Results"
import { Github } from "lucide-react"
import "./assets/scss/App.scss"
function App() {
  return (
    <>
      <section className='main'>
        <Github />
        <Search />
        <Results />
      </section>
    </>
  )
}

export default App
