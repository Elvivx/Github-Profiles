import { GitContextProvider } from "./components/context/async"
import Home from "./Home"
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
