import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Mywork from './Components/MyWork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <Hero />
      <About />
      <Mywork />
      <Contact />
      <Footer menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default App
