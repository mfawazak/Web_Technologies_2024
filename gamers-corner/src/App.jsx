import Homepage from './pages/homepage'
import Footer from './components/footer'
import Header from './components/header'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
