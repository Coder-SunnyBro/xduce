import './App.css'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import CoreValue from './components/coreValue/coreValue'
import NavbarTop from './components/navbarTop/NavbarTop'
import ResourceCenter from './components/ResourceCenter/ResourceCenter'

const App = () => {
  return (
    <>
    <div className='h-full w-full'>
      <NavbarTop />
      <Navbar />
      <Carousel/>
      <CoreValue/>
      <ResourceCenter/>
    </div>
    </>
  )
}

export default App