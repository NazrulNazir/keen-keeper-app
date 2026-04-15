import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import UserContextProvider from './context/UserContext'

function App() {

  return (
    <>
      <UserContextProvider>
        <div className='bg-base-300'>
          <NavBar />
          <Outlet></Outlet>
          <Footer />
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
