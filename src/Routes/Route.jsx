
import { Routes , Route } from "react-router-dom"
import Home from "../pages/Home"
import Collection from "../pages/Collection"
import Login from "../pages/Login"
import Register from "../pages/Register"




function Routers(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/men" element={<Home/>}/>
            <Route path="/women" element={<Home/>}/>
            <Route path="/kids" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </>
    )
}
export default Routers