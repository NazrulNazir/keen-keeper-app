import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div className='bg-base-300'>
        <NavBar/>
          <Outlet></Outlet>
        <Footer/>
      </div>
    </>
  )
}

export default App
