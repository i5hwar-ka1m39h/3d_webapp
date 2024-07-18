import Navbar from "./components/Navbar"
import HeroSec from "./components/HeroSec"
import Highlights from "./components/Highlights"
import Model3D from "./components/Model3D"
import { Features } from "./components/Features"
import LastOne from "./components/LastOne"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
    <main className=" bg-black">
      <Navbar/>
      <HeroSec/>
      <Highlights/>
      <Model3D/>
      <Features/>
      <LastOne/>
      <Footer/>
      
    </main>
    </>
    
  )
}

export default App
