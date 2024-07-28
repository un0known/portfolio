import { Home, AboutMe, Projects, Footer } from "./section";
import Nav from "./componant/Nav";
import {Route, Routes, BrowserRouter} from "react-router-dom";



function App() {

  return (
    <main className='bg-white'>


      <Nav />

      <section>
        <Home />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
