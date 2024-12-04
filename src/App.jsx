import { GitContextProvider } from "./components/context/contexts"
import Home from "./components/Home"
import "./assets/scss/App.scss"

function App() {
  return (
    <GitContextProvider>
      <section className='main'>
        <Home />
      </section>
    </GitContextProvider>
  )
}

export default App
