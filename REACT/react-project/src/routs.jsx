import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
function AppRoutes(){
    return(
        <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}>
            </Route>
        </Routes>
    )
}
export default AppRoutes