// import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import "./components/navbar.css"
import "./components/Home.css"
import "./components/About.css"
import "./components/Project.css"
import "./components/Contact.css"

function App() {

  return (
    <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default App


{/* <BrowserRouter>
<Navbar/>
<Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/about" element={ <About/> } />
    <Route path="/projects" element={ <Projects/> } />
    <Route path="/contact" element={ <Contact/> }/>
</Routes>
</BrowserRouter> */}
