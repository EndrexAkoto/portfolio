import { useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"

function App() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
