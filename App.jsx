import React from "react"
import Header from "./Pages/Header"
import { Routes,Route} from "react-router-dom" 
import "./App.css"
import Login from './Pages/Login'
import Checkoutpage from './Pages/Checkoutpage'
import Home from "./Pages/Home"

function App() {
  
  return (
    <>
     < div className="app">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Checkoutpage' element={<Checkoutpage/>}/>
          <Route path='/login' element={<Login/>}/>
    </Routes>
    </div> 
    </>
  )
}

export default App
