import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import Error404 from "../pages/Error404"

function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes