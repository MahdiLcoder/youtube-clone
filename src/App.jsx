import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Routes , Route } from "react-router-dom"
import Home from "./Pages/Home/Home.jsx"
import Video from "./Pages/Video/Video.jsx"
function App() {
  
  const [sidebar, setSidebar] = useState(true);



  return (
    <>
      <Navbar sidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:vedioId' element={<Video />} />
      </Routes>
    </>
  )
}

export default App
