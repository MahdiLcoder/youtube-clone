import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Routes , Route } from "react-router-dom"
import Home from "./Pages/Home/Home.jsx"
import Video from "./Pages/Video/Video.jsx"
function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} setSidebar={setSidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </>
  )
}

export default App
